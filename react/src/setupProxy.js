const proxy = require('http-proxy-middleware');

const proxyConfig = proxy(['/site'], {target: ' http://10.10.40.33:8700', changeOrigin: true});

module.exports = function (app) {
  app.use(proxyConfig);
};

