import { Router } from 'express';

import createController from './controller';
import createRoutes from './routes';
import createManagementService from './service';

export default function createManagementMiddleware({ Models }) {
  const managementService = createManagementService({ Models });
  const controllers = createController(managementService);
  const routes = createRoutes(controllers);

  const api = new Router();
  api.use(routes);

  // eslint-disable-next-line
  api.use((err, req, res, next) => {
    res.status(500);
    res.render('error', { error: err });
  });

  return routes;
}
