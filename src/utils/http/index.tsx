import axios, { AxiosRequestConfig, CustomParamsSerializer} from "axios";
import {stringify} from "qs";
const defaultConfig: AxiosRequestConfig = {
    // 请求超时时间
    timeout: 10000,
    headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    },
    // 数组格式参数序列化（https://github.com/axios/axios/issues/5142）
    paramsSerializer: {
        serialize: stringify as unknown as CustomParamsSerializer
    }
};

class Server  {
    request=axios.create(defaultConfig);
    constructor() {
        this.BaseConfig();
        this.httpInterceptorsRequest();
        this.httpInterceptorsResponse();
    }
    BaseConfig() {

    }
    httpInterceptorsRequest() {
        this.request.interceptors.request.use(
            (config) => {
                // Do something before request is sent
                return config;
            },
            (error) => {
                // Do something with request error
                return Promise.reject(error);
            }
        );
    }
    httpInterceptorsResponse() {
        this.request.interceptors.response.use(
            (response) => {
                // Do something with response data
                return response;
            },
            (error) => {
                // Do something with response error
                return Promise.reject(error);
            }
        );
    }
    async get(url: string, params?: any, config?: any,data?:any) {
        return await this.request.get(url, {data, params, ...config });
    }
    async post(url: string, data?: any, config?: any) {
        return await this.request.post(url, data, config);
    }
    async put(url: string, data?: any, config?: any) {
        return await this.request.put(url, data, config);
    }
    async delete(url: string, config?: any) {
        return await this.request.delete(url, config);
    }
}

const server = new Server();
export default server;
