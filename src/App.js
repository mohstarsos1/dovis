import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Colorizer from "./pages/Colorizer";
import Todo from "./pages/Todo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="weather" element={<Weather />} />
        <Route path="colorizer" element={<Colorizer />} />
        <Route path="todo" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
