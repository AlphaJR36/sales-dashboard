import { server } from './server/Server';

server.listen(process.env.SERVER_PORT || 8080, () => {
  console.log('HTTP server listening on port: ' + process.env.SERVER_PORT || 8080);
});
