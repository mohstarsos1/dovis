import React, { useState } from "react";
import Button from "../components/Button";

function Colorizer() {
  const [color, setColor] = useState("#FFFFFF");

  const generateColor = () => {
    const generatedColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor("#" + generatedColor.toUpperCase());
  };

  return (
    <div
      className="flex flex-col h-screen justify-center items-center"
      style={{ backgroundColor: color }}
    >
      <div className="text-6xl font-bold mb-8 text-white shadow-black drop-shadow-lg">
        {color}
      </div>
      <Button onClick={() => generateColor()}>Generate Color</Button>
    </div>
  );
}

export default Colorizer;
