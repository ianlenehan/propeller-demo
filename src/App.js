import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import Map from "./components/map";
import Home from "./components/home";

const Container = styled.main`
  background-color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
