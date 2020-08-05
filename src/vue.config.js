module.exports = {
  
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:33000/api',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
  
}