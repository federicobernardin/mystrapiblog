// backend/server.js
const http = require('http');

const PORT = process.env.PORT || 1337;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    service: 'backend',
    time: new Date().toISOString(),
    url: req.url
  }));
});

server.listen(PORT, () => {
  console.log(`✅ Backend dummy server listening on port ${PORT}`);
});
