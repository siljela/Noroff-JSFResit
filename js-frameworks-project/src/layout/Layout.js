import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Homepage from "./Homepage";
import Grass from "./Grass";
import Contact from "./Contact";

function Layout() {
 return (
    <Router>
        <ul>
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/grass">Grass</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route path="/grass" element={<Grass />}>
          </Route>
          <Route path="/contact" element={<Contact />}>
          </Route>
        </Routes>
    </Router>
 );
}

export default Layout;