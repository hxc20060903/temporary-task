import { mapValues } from 'lodash';
import * as handlerCreators from './handlers';

export default function createHandlers({ Models }) {
  return mapValues(handlerCreators, creator => creator({ ...Models }));
}
