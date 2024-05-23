import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  const [visits, setVisits] = useState(0);
  const bannerId = "B00944228";

  const incrementVisits = () => {
    setVisits(visits + 1);
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home
              visits={visits}
              incrementVisits={incrementVisits}
              bannerId={bannerId}
            />
          </Route>
          <Route path="/about">
            <About visits={visits} />
          </Route>
          <Route path="/contact">
            <Contact visits={visits} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
