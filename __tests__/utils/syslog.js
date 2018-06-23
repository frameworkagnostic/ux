
// import fs from 'fs';
// import { Console } from 'console';
// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// const logger = new Console(output, errorOutput);
const winston = require('winston');
const { createLogger, format, transports } = require('winston');

const MESSAGE = Symbol.for('message');

const jsonFormatter = (logEntry) => {
  const base = { timestamp: new Date() };
  const json = Object.assign(base, logEntry)
  logEntry[MESSAGE] = JSON.stringify(json, null, '\t');
  return logEntry;
}

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    //winston.format.json(),
    winston.format(jsonFormatter)(),
    //winston.format.colorize(),
  ),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'stderr.log', level: 'error' }),
    new winston.transports.File({ filename: 'stdout.log' })
  ]
});

export const log = (...args) => logger.log({
  level: 'info',
  message: args
});

export const info = (...args) => logger.log({
  level: 'info',
  message: args
});

export const error = (...args) => logger.log({
  level: 'error',
  message: args
});

export const warn = (...args) => logger.log({
  level: 'warn',
  message: args
});

export const json = (...args) => {
  logger.log({
    level: 'info',
    message: args.map((arg) => {
      const type = typeof arg;
      if(type === 'object') {
        return arg;
      }
      return arg;
    })
  });
}

export const keys = (...args) => {
  logger.log({
    level: 'info',
    message: args.map((arg) => {
      const type = typeof arg;
      if(type === 'object') {
        return Object.keys(arg);
      }
      return arg;
    })
  });
}

export default logger;
