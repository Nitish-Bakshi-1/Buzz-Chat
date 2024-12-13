
import http from "http";
import express from "express";
import cors from "cors";
import { Server } from "socket.io";

const app = express();
const port = 4500 || process.env.PORT;
app.use(cors());
app.get("/", function (req, res) {
  res.send({
    message: "hella its workin",
  });
});
const server = http.createServer(app);
const io = new Server(server);
io.on("connection", () => {
  console.log("new connection ");
});
server.listen(port, () => {
  console.log(`server is running on port http://localhost:${port}`);
});
