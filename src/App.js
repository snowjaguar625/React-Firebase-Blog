import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/home";
import Post from "./pages/post";
import Create from "./pages/create";
import NoMatch from "./pages/no-match";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h2>React + Firebase Blog (Ali Test)</h2>
        </Link>
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/:slug" component={Post} />
          <Route path="/404" component={NoMatch} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
