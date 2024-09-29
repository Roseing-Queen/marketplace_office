const esbuild = (node: string) => {
    if (node != 'product') {
        return {}
    } else {
        return {
            drop: ['console', 'debugger'],
        }
    }
}
export default esbuild;
