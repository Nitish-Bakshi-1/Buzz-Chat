import React from "react";

const Join = () => {
  return (
    <div className="joinPage">
      <div className="joinContainer">
        <h1>Buzz - Chat</h1>
        <input type="text" placeholder="Enter your name" id="joinInput" />
        <button className="joinBtn">join</button>
      </div>
    </div>
  );
};

export default Join;
