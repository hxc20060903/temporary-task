import axios from 'axios';

export default function createSender({ apiBaseUrl }) {
  // there should be some token stuff here for authentication
  const send = axios.create({
    baseURL: apiBaseUrl,
    timeout: 1000,
  });
  return send;
}
