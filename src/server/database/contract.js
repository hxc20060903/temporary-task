import { Schema } from 'mongoose';
import timestampPlugin from 'mongoose-timestamp';

export default function createContractSchema(mongooseConnection) {
  const contractSchema = new Schema({
    userName: {
      type: String,
      required: true,
    },
    userSurname: {
      type: String,
      required: true,
    },
    currency: {
      type: String, // can be enum, not yet determined how to examine the value
      required: true,
    },
    amountInUsd: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
      required: true,
    },
  });

  contractSchema.plugin(timestampPlugin);
  contractSchema.index({ createdAt: 1 });

  return mongooseConnection.model('Contract', contractSchema);
}
