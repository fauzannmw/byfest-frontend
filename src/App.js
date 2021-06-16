import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/catalog">
            <Catalog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
