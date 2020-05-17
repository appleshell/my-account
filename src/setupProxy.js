const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user',
    createProxyMiddleware({
      target: 'http://127.0.0.1:7001',
      changeOrigin: true,
      router: {
        '/data': 'https://dashboards-dev.sprinklr.com'
      }
    })
  )
}