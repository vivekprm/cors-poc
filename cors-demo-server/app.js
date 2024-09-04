const http = require('http');
const port = 8002;

http.createServer((req, res) => {
  const headers = {
    'Access-Control-Allow-Origin': 'http://localhost:8001', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET, DELETE',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Access-Control-Allow-Headers': '*',
    /** add other headers as per requirement */
  };

  if (req.method === 'OPTIONS') {
    res.writeHead(204, headers);
    res.end();
    return;
  }

  if (['GET', 'POST', 'DELETE'].indexOf(req.method) > -1) {
    if (req.method === "GET") {
      res.writeHead(200, headers);
      res.end('Get method called');
    }
    if (req.method === "POST") {
      res.writeHead(200, headers);
      res.end('Post method called');
    }
    if (req.method === "DELETE") {
      res.writeHead(200, headers);
      res.end('Delete method called');
    }
    return;
  }

  res.writeHead(405, headers);
  res.end(`${req.method} is not allowed for the request.`);
}).listen(port);
