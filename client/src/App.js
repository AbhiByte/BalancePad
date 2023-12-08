import "./App.css";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
