import logger from './logger.ts';

export const loggerUtils = {
  info: (message: string, meta?: any) => {
    logger.info(message + (meta ? ` ${JSON.stringify(meta)}` : ''));
  },

  error: (message: string, error?: any) => {
    if (error instanceof Error) {
      logger.error(`${message}: ${error.message}\nStack: ${error.stack}`);
    } else {
      logger.error(message + (error ? ` ${JSON.stringify(error)}` : ''));
    }
  },

  warn: (message: string, meta?: any) => {
    logger.warn(message + (meta ? ` ${JSON.stringify(meta)}` : ''));
  },

  debug: (message: string, meta?: any) => {
    logger.debug(message + (meta ? ` ${JSON.stringify(meta)}` : ''));
  },

  http: (message: string, meta?: any) => {
    logger.http(message + (meta ? ` ${JSON.stringify(meta)}` : ''));
  },
};

export default loggerUtils;