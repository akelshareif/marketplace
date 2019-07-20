if(process.env.NODE_ENV === 'production'){
    //currently in production
    module.exports = require('./prod');
} else {
    //currently in development
    module.exports = require('./dev');
}