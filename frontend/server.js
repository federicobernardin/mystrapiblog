// frontend/server.js
const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <head><title>Frontend Dummy</title></head>
      <body>
        <h1>✅ Frontend dummy server on port ${PORT}</h1>
        <p>Path requested: ${req.url}</p>
      </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`✅ Frontend dummy server listening on port ${PORT}`);
});
