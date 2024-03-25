export default {
    proxy: {
      '/api': {
        'target': 'https://gzh.junejh.cn',
        'changeOrigin': true,
      },
      
    },
  }