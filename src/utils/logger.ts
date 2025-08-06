import winston from 'winston';

// Define custom log levels
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// Define different colors for each level
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue',
};

// Tell winston that we want to link the colors
winston.addColors(colors);

// Define log format
const format = winston.format.combine(
  // Add timestamp
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  // Add colors
  winston.format.colorize({ all: true }),
  // Define the format of the message showing the timestamp, the level and the message
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

// Define which transports the logger must use to print out messages
const transports = [
  // Print to console
  new winston.transports.Console(),
  // Print all error level logs to error.log
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  // Print all logs to combined.log
  new winston.transports.File({ filename: 'logs/combined.log' }),
];

// Create the logger instance
const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  levels,
  format,
  transports,
});

export default logger;