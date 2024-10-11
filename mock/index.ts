import {createProdMockServer} from "vite-plugin-mock/client";

export const setupMockServer = () => {
    createProdMockServer([]).then(r =>{
        console.log("Mock server started", r);
    })
}
