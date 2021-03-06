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
import Schedule from './pages/Schedule';
import { useState } from 'react';
import { AuthContext } from './config/Auth';
import ScrollToTop from "./component/ScrollToTop";

function App() {
  function PageSwitch() {
    let location = useLocation();
    
    return (
      <div className="App">
        <Helmet titleTemplate="%s | BYFEST 2021" defaultTitle="BYFEST 2021">
          <meta 
            name="description" 
            content="Brawijaya Film Festival atau BYFEST merupakan festival film tahunan yang digagas oleh Unit Kegiatan Mahasiswa (UKM) Nol Derajat Film Universitas Brawijaya." 
          />
          <meta 
            name="keywords" 
            content="Brawijaya Film Festival, BYFEST, Nol Derajat Film, Nolder, UB" 
          />
          <meta name="authors" content="Brawijaya Film Festival" />
        </Helmet>
        <GlobalNavbar active={location.pathname} />
        {/* <Pages> */}
        <Switch>
          <Route exact path="/catalog/" component={Catalog} />
          <Route exact path="/featured" component={Program} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Homepage} />
          <PrivateRoute exact path="/streaming/:slug" component={Streaming} />
          <PrivateRoute exact path="/schedule" component={Schedule} />
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
        <ScrollToTop />
        <PageSwitch />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
