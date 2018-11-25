import { mapValues, isFunction } from 'lodash';
import createContractController from './contract';

function decorateAsyncMiddleware(middleware) {
  return async function handleRequest(req, res, next) {
    try {
      await middleware(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

function decorateContrller(controller) {
  return mapValues(controller, (method) => {
    if (isFunction(method)) {
      return decorateAsyncMiddleware(method);
    }
    return method;
  });
}

export default function createControllers(managementService) {
  const controllers = {
    contractController: createContractController(managementService),
  };
  return mapValues(controllers, decorateContrller);
}
