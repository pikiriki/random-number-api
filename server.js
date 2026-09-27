const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log("Request received");

  const randomNumber = Math.floor(Math.random() * 100) + 1;

  res.end(String(randomNumber));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});