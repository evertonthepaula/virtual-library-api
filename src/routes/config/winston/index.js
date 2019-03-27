const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `[${info.timestamp}] - ${info.level}: ${info.message} | "service: ${info.service}" ${(info.splat!==undefined)?info.splat :''}`)
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({
            filename: './logs/error.log',
            level: 'error',
            maxsize: 5242880, //5MB
            maxFiles: 2,
        }),
        new winston.transports.File({ 
            filename: './logs/combined.log',
            maxsize: 5242880, //5MB
            maxFiles: 2,
        })
    ],
    exceptionHandlers: [
        new winston.transports.File({
            filename: './logs/exceptions.log'
        })
    ]
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format:winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
    }));
}

module.exports = logger;
