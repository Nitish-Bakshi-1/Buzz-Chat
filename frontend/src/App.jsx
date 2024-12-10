import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Join from "./component/join/join.jsx";

// const ENDPOINT = "http://localhost:4500";
// const socket = socketIO(ENDPOINT, { transports: ["websocket"] });

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" component={} />
        <Route path="/chat" component={}/>
      </Router>
    </div>
  );
};

export default App;
