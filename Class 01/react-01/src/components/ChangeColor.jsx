import { useState } from "react";

function ChangeColor() {
  // state stores the current background color
  const [color, setColor] = useState("white");

  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        textAlign: "center",
        paddingTop: "60px",
      }}>
        
      <h1>Change Background Color</h1>
      <h3>Current Color: {color}</h3>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("white")}>Reset</button>
    </div>
  );
}
export default ChangeColor;
