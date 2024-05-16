import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Connect from "./pages/connect";
import Landingpage from "./pages/landingpage";
import Login from "./pages/login";
import Logout from "./pages/logout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Landingpage" element={<Landingpage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Connect" element={<Connect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
