import React from "react";
import socketIO from "socket.io-client";

const ENDPOINT = "http://localhost:4500";
const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const App = () => {
  socket.on("connect", () => {
    console.log("new connection");
  });

  return <div>App</div>;
};

export default App;
