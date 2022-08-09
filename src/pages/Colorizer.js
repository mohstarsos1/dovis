import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { MdContentCopy } from "react-icons/md";
import Toast from "../components/Toast";

function Colorizer() {
  const [color, setColor] = useState("#000000");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const toastInterval = setInterval(() => {
      setShowToast(false);
    }, 3000);
    return () => {
      clearInterval(toastInterval);
    };
  }, [showToast]);

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

  const handleClipboard = () => {
    navigator.clipboard.writeText(color);
    setShowToast(true);
  };

  return (
    <div
      className="flex flex-col h-screen justify-center items-center transition-all"
      style={{ backgroundColor: color }}
    >
      <div
        className="text-6xl font-bold mb-8 text-white shadow-black drop-shadow-lg flex items-center"
        onClick={() => handleClipboard()}
      >
        <div className="mr-4">{color}</div>
        <MdContentCopy className="cursor-pointer text-5xl hover:text-gray-400" />
      </div>
      <Button onClick={() => generateColor()} size="lg">
        Generate Color
      </Button>

      {showToast && <Toast type="success">Hex code copied successfully.</Toast>}
    </div>
  );
}

export default Colorizer;
