import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
