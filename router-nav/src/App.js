
import './App.css';
import { Route, BrowserRouter as BrowserRouter, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Extra from "./Pages/Extra";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/extra">Extra</Link>
              </li>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Extra" element={<Extra />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
