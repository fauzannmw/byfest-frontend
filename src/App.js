import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Catalog from "./pages/Catalog";
import Homepage from "./pages/Homepage";
import GlobalNavbar from "./component/GlobalNavbar";
import GlobalFooter from "./component/GlobalFooter";
import { Helmet } from "react-helmet";
import Program from "./pages/Program";
import Streaming from "./pages/Streaming";

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
            <Program />
          </Route>
          <Route path="/streaming">
            <Streaming />
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
