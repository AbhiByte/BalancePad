import "./App.css";
import Login from "./screens/Login";
import Home from "./screens/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
