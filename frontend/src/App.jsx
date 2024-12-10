import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Join from "./component/join";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Join />} />
          <Route path="/chat" />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
