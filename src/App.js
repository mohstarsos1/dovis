import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Colorizer from "./pages/Colorizer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="colorizer" element={<Colorizer />} />
      </Routes>
    </div>
  );
}

export default App;
