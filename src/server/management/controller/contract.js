export default function createContractController(managementService) {
  async function createContract(req, res) {
    const response = await managementService.createContractHandler(
      req.body,
    );
    res.json(response);
  }

  async function updateContract(req, res) {
    const response = await managementService.updateContractHandler(
      { ...req.params, ...req.body },
    );
    res.json(response);
  }

  async function getContracts(req, res) {
    const response = await managementService.getContractsHandler(
      { ...req.params, ...req.query },
    );
    res.json(response);
  }

  async function getContract(req, res) {
    const response = await managementService.getContractHandler(
      { ...req.query, ...req.params },
    );
    res.json(response);
  }

  async function removeContract(req, res) {
    const response = await managementService.removeContractHandler(
      req.params,
    );
    res.json(response);
  }

  return {
    createContract,
    updateContract,
    getContracts,
    getContract,
    removeContract,
  };
}
