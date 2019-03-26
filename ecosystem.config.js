module.exports = {
    apps: [{
        name: 'virtual-library-api',
        script: '../src/bootstrap.js',
        output: '../logs/pm2/out.log',
        error:  '../logs/pm2/error.log',
        log:    '../logs/pm2/combined.outerr.log',
      env: {
            NODE_ENV: 'production',
            APP_NAME: 'API',
            APP_PORT: 3002,
            DB_DBMS: 'mongodb',
            DB_HOST: 'localhost',
            DB_PORT: 27017,
            DB_USER: '',
        }
    }]
}