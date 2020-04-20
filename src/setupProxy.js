const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/data',
    createProxyMiddleware({
      target: 'https://dashboards-dev.sprinklr.com',
      changeOrigin: true,
    })
  )
}