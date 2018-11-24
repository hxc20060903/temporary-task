import { setup } from 'bem-cn';

const mod = '--';
const el = '__';
const bem = setup({ el, mod });

export default bem;
// shorthand to get the modifier classname only
export const modifier = (bemBase, modify = '') => `${bemBase}${mod}${modify}`;
