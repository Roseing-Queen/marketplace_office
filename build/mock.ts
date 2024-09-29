import { viteMockServe } from 'vite-plugin-mock'
export function mock(){
    return viteMockServe({
        mockPath: 'mock'
    })
}
