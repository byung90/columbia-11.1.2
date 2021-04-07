const http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

const handleRequest = (request, response) => {
  response.end(`It Works!! Path Hit: ${request.url}`);
}

const server1 = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest);

server1.listen(PORT1, () => {
  console.log(`Server listening on: http://localhos:${PORT1}`);
})

server2.listen(PORT1, () => {
  console.log(`Server listening on: http://localhos:${PORT2}`);
})