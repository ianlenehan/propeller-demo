import React from "react";
import { Route, Switch } from "react-router-dom";
import Map from "./components/map";
import Home from "./components/home";

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

      <Route
        path="/(.+)"
        render={() => (
          <div>
            <Switch>
              <Route exact path="/map" component={Map} />
            </Switch>
          </div>
        )}
      />
    </main>
  );
}

export default App;
