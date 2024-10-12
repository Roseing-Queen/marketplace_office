import { message } from 'antd';
class Data {
    dbPromise: { [key: string]: Promise<IDBDatabase> } = {};
    messageApi: any;
    constructor() {
        this.dbPromise = {};
        const [messageApi] = message.useMessage();
        this.messageApi = messageApi;
    }

    getDB(dbName: string, version = 1, tableName: string, name: string): Promise<IDBDatabase> {
        if (!this.dbPromise[dbName]) {
            this.dbPromise[dbName] = new Promise((resolve, reject) => {
                const request = indexedDB.open(dbName, version);

                request.onerror = (err) => {
                    console.error('Database open error:', err);
                    this.messageApi.open({
                        type: 'error',
                        content: '数据库打开失败',

                    });
                    reject(err);
                };

                request.onsuccess = (event:any) => {
                    resolve(event.target.result);
                };

                request.onupgradeneeded = (event: any) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains(tableName)) {
                        const objectStore = db.createObjectStore(tableName, { keyPath: 'id', autoIncrement: true });
                        objectStore.createIndex(name, name, { unique: false });
                    }
                    resolve(db);
                };
            });
        }
        return this.dbPromise[dbName];
    }

    async DataDataBaseAddData(data: any, name: string, tableName: string, DataBaseName: string) {
        this.validateInput(data, name, DataBaseName);

        try {
            const db = await this.getDB(DataBaseName, 1, tableName, name);
            const transaction = db.transaction([tableName], 'readwrite');
            const objectStore = transaction.objectStore(tableName);
            const base64Data = btoa(JSON.stringify(data));
            await new Promise((resolve, reject) => {
                const requestAdd = objectStore.add({ [name]: base64Data });
                requestAdd.onsuccess = resolve;
                requestAdd.onerror = reject;
            });
            this.messageApi.open({
                type: 'success',
                content: '数据插入成功',
            });
        } catch (err) {
            console.error('Data insertion error:', err);
            this.messageApi.open({
                type: 'error',
                content: '数据插入失败',
            });
        }
    }

    async DataDataBaseGetData(name: string, tableName: string, DataBaseName: string) {
        this.validateInput(null, name, DataBaseName);
        try {
            const db = await this.getDB(DataBaseName, 1, tableName, name);
            const transaction = db.transaction([tableName], 'readonly');
            const objectStore = transaction.objectStore(tableName);
            const index = objectStore.index(name);
            const results = await new Promise<any>((resolve, reject) => {
                const getRequest = index.getAll();
                getRequest.onsuccess = (event:any) => resolve(event.target.result);
                getRequest.onerror = reject;
            });

            if (results.length > 0) {
                this.messageApi.open({
                    type: 'success',
                    content: '数据读取成功',
                });
                console.log(results);
            } else {
                this.messageApi.open({
                    type: 'warning',
                    content: '未找到相关数据',
                });
            }
        } catch (err) {
            console.error('Data retrieval error:', err);
            this.messageApi.open({
                type: 'error',
                content: '数据读取失败',
            });
        }
    }

    // 假设删除、清除、修改方法也类似，使用 async/await 和 getDB

    validateInput(data: any, name: string, dbName: string) {
        if (data === null || data === undefined) {
            throw new Error('请传入数据');
        }
        if (!name) {
            throw new Error('请传入参数名称');
        }
        if (!dbName) {
            throw new Error('请传入数据库名称');
        }
    }
}

const DataBase = new Data();
export default DataBase;
