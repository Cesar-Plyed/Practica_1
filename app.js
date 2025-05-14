const tamaulipas = () => {
  const { createServer } = require("http");
  const { parse } = require("url");
  const { readFile } = require("fs").promises;

  const server = createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (pathname === "/") {
      try {
        const data = await readFile("./index.html", "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      } catch (error) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Hola</h1>");
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
    }
  });

  server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
  });
};

tamaulipas();
