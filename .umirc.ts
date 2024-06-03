export default {
    proxy: {
      '/api': {
        'target': 'https://gzh.junejh.cn',
        // 'target': 'http://localhost:3000',
        'changeOrigin': true,
      },
      
    },
  }