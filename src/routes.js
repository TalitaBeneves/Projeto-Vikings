import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Personagens from "./pages/Personagens";
import Sobre from "./pages/Sobre";
import Videos from "./pages/Videos";

function Routes () {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/personagens" component={Personagens} />
        <Route path="/sobre" component={Sobre} />
        <Route path="/videos" component={Videos} />
      </Switch>
    </Router>
  )
}

export default Routes;