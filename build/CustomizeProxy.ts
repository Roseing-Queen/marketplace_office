const CustomizeProxy=(VITE_PUBLIC_URL: string)=>{
    return {
        "/api/user": {
            target: VITE_PUBLIC_URL,
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api\/user/, "user"),
        },
        "/api/api": {
            target: VITE_PUBLIC_URL,
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api\/api/, "api"),
        },
        "/api/Marketplace": {
            target: VITE_PUBLIC_URL,
            changeOrigin: true,
            rewrite: (path: string) => path.replace(/^\/api\/Marketplace/, "Marketplace"),
        }
    }
}
export default CustomizeProxy
