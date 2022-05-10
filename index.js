const http = require("http");
const url = require("url");
const queryString = require("query-string");
const { json } = require("node:stream/consumers");
const port = 3000;
const host = "localhost";

const server = http.createServer((req, response) => {
  const params = queryString.parse(url.parse(req.url).search);
  const stringJson = JSON.stringify(params);

  response.statusCode = 200;
  // response.setHeader("content-type", "text/plain");
  response.setHeader("content-type", "text/json");
  //response.end(`Boa Noite ${params.nome || ":)"}`);
  response.end(stringJson);
});

server.listen(port, host, () => {
  console.log(`Servidor Executando em http://${host}:${port}`);
});
