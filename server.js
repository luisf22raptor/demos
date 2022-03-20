const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Servidor WEB Luis AWS desde GitHup');
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
