import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import { withRouter } from "react-router";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import Featured from "./pages/Featured";
import GlobalNavbar from "./component/GlobalNavbar";
import GlobalFooter from "./component/GlobalFooter";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Pages = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function App() {
  function PageSwitch() {
    let location = useLocation();

    return (
      <div className="App">
        <Helmet titleTemplate="%s | BYFEST 2021" defaultTitle="BYFEST 2021">
          <meta name="description" content="Brawijaya Film Festival 2021" />
        </Helmet>
        <GlobalNavbar active={location.pathname} />
        {/* <Pages> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/catalog/">
            <Catalog />
          </Route>
          <Route path="/featured">
            <Featured />
          </Route>
        </Switch>
        {/* </Pages> */}
        <GlobalFooter />
      </div>
    );
  }

  return (
    <Router>
      <PageSwitch />
    </Router>
  );
}

export default App;
