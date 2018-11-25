import http from 'http';
import express from 'express';

// ugly
export default function createHostServer({ serverMiddleware, port = 4000 }) {
  const app = express();
  app.use(serverMiddleware);

  return () => {
    http.createServer(app).listen(port);
  };
}
