import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./pages/Home";
import Multiplikasjon from "./pages/Multiplikasjon";
import Divisjon from "./pages/Divisjon";

function App() {
  return (
    <Router>
      <main className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">
                <strong>Matematikk</strong>
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/multiplikasjon">Multiplikasjon</NavLink>
            </li>
            {/* <li>
              <NavLink to="/divisjon">Divisjon</NavLink>
            </li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/multiplikasjon" element={<Multiplikasjon />} />
          <Route path="/divisjon" element={<Divisjon />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
