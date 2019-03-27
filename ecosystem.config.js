module.exports = {
    apps: [{
        name: 'virtual-library-api',
<<<<<<< HEAD
        script: './src/bootstrap.js',
        output: './logs/pm2/out.log',
        error:  './logs/pm2/error.log',
        log:    './logs/pm2/combined.outerr.log',
=======
        script: '../src/bootstrap.js',
        output: '../logs/pm2/out.log',
        error:  '../logs/pm2/error.log',
        log:    '../logs/pm2/combined.outerr.log',
>>>>>>> deed4a67027354df96bae5f6b22a156d72216ccb
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