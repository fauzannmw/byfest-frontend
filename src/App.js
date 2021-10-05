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
import Streaming from "./pages/Streaming";
import { Helmet } from 'react-helmet';
import Program from './pages/Program';
import PrivateRoute from './config/PrivateRoute';
import Login from './pages/Login';
import LivestreamMenu from './pages/LivestreamMenu';
import { useState } from 'react';
import { AuthContext } from './config/Auth';

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
          <Route exact path="/catalog/" component={Catalog} />
          <Route exact path="/featured" component={Program} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/streaming" component={Streaming} />
          <Route exact path="/livestream-menu" component={LivestreamMenu} />
          <Route exact path="/" component={Homepage} />
        </Switch>
        {/* </Pages> */}
        <GlobalFooter />
      </div>
    );
  }

  const existingToken = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingToken);
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data))
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{authTokens, setAuthTokens: setTokens}}>
      <Router>
        <PageSwitch />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
