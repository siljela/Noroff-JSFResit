import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Homepage from "../components/pages/Homepage";
import CardDetail from "../components/pages/CardDetail";
import Grass from "../components/pages/Grass";
import Contact from "../components/pages/Contact";

function Layout() {
 return (
    <Router>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" >Homepage <span className="nav-item_divider">|</span> </Link>
          </li>
          <li className="nav-item">
            <Link to="/grass"> Grass <span className="nav-item_divider">|</span> </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact"> Contact</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route path="/grass" element={<Grass />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
          <Route exact path="/cards/:id" element={<CardDetail />}>
          </Route>
          <Route exact path="/grass/cards/:id" element={<CardDetail />}>
          </Route>
        </Routes>
    </Router>
 );
}

export default Layout;