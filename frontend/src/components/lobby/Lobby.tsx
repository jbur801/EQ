import React from "react";

export default function Lobby() {
  console.log("code segment reached:lobby");
  return (
    <div>
      <iframe
        id="background"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        src={process.env.PUBLIC_URL + "/shaders/base.html"}
      />
    </div>
  );
}
