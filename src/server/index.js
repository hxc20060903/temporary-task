import { Router } from 'express';
import createCorsMiddleware from 'cors';
import winston from 'winston';
import bodyParser from 'body-parser';
import createManagementMiddleware from './management';
import createMongoose from './database';
import createHost from './host';

const logger = winston.createLogger();

const router = new Router();
const corsMiddleware = createCorsMiddleware();
router.use(corsMiddleware);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

async function construct() {
  const Models = await createMongoose();
  const managementMiddleware = createManagementMiddleware({ Models });
  router.use('/api', managementMiddleware);

  const startServer = createHost({ serverMiddleware: router });
  startServer();
}

construct()
  .then(logger.log)
  .catch(logger.error);
