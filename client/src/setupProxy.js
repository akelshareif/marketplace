const proxy = require('http-proxy-middleware');

module.exports = app => {
    app.use(proxy('/auth/google', {target: 'http://localhost:5000'}));
    app.use(proxy('/auth/facebook', {target: 'http://localhost:5000'}));
    app.use(proxy('/api/**', {target: 'http://localhost:5000'}));
}