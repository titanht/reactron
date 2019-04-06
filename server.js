const ws = require("nodejs-websocket"),
HOST = "127.0.0.1", PORT=8001;

const server = ws.createServer((conn) => {
  conn.on("text", (text) => {
    server.connections.forEach(conn => {
      conn.sendText(text);
    })
  })

  conn.on("error", err => console.log("SErver error: ", err));

  server.listen(PORT, HOST, () => {
    console.log(`Server listening ${HOST}:${PORT}`);
  })

})