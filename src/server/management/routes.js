import { Router } from 'express';

export default function createRouter(imports) {
  const {
    contractController,
  } = imports;

  const router = new Router();

  router.post('/contracts', contractController.createContract);
  router.get('/contracts', contractController.getContracts);
  router.get('/contracts/:contractId', contractController.getContract);
  router.patch('/contracts/:contractId', contractController.updateContract);
  router.delete('/contracts/:contractId', contractController.removeContract);
  return router;
}
