import createConnection from './connection';
import createContractSchema from './contract';

export default async function createMongoose(mongoUri) {
  const connection = await createConnection(mongoUri);
  const Contract = createContractSchema(connection);

  return {
    Contract,
  };
}
