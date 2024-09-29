const terserOptions = (node: string) => {
    if (node != 'product') {
        return {}
    } else {
        return {
            minify: "terser",
            terserOptions: {
                compress: {
                    drop_console: false,
                    drop_debugger: false
                }
            }
        }
    }
}
export default terserOptions;
