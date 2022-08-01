import React, { useState } from "react";
import Button from "../components/Button";

function Colorizer() {
  const [color, setColor] = useState("#000000");

  const generateColor = () => {
    // const generatedColor = Math.floor(Math.random() * 16777215).toString(16);
    // setColor("#" + generatedColor.toUpperCase());
    const colors = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    const n1 = colors[Math.floor(Math.random() * colors.length)];
    const n2 = colors[Math.floor(Math.random() * colors.length)];
    const n3 = colors[Math.floor(Math.random() * colors.length)];
    const n4 = colors[Math.floor(Math.random() * colors.length)];
    const n5 = colors[Math.floor(Math.random() * colors.length)];
    const n6 = colors[Math.floor(Math.random() * colors.length)];
    const generatedColor = n1 + n2 + n3 + n4 + n5 + n6;
    setColor("#" + generatedColor);
  };

  return (
    <div
      className="flex flex-col h-[calc(100vh_-_64px)] justify-center items-center transition-all"
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
