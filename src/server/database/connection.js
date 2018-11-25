import mongoose from 'mongoose';
import Promise from 'bluebird';
import eventToPromise from 'event-to-promise';
import winston from 'winston';

const logger = winston.createLogger();

mongoose.Promise = Promise;

// ugly...
export default async function mongooseConnection(mongoUri = 'mongodb://localhost:27017/task') {
  logger.info('Try to connect to %s', mongoUri);
  const connection = mongoose.createConnection(mongoUri);

  [
    'open',
    'connecting',
    'connected',
    'reconnected',
    'disconnected',
    'close',
  ].forEach((eventName) => {
    connection.on(eventName, () => logger.info('Mongoose connection is %s.', eventName));
  });
  connection.on('error', (error) => {
    logger.error('Error connecting to MongoDB [%s]: %s', mongoUri, error.message, error);
  });

  async function waitForConnected(connect) {
    return new Promise((resolve, reject) => {
      const success = Promise.any([
        eventToPromise(connect, 'connected'),
        eventToPromise(connect, 'fullsetup'),
      ]);
      const failure = eventToPromise(connect, 'error');
      success.then(resolve);
      failure.then(reject);
    });
  }

  await waitForConnected(connection);
  return connection;
}
