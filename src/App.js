import React, { Suspense, Component }from 'react';
import './App.css';
import Dan from './Dan';
import Everyone from './Everyone';
import Geanina from './Geanina';
import User from './User';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from 'semantic-ui-react';


class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-header">Hello</h1>
          <Router>
          <Link to='/geanina'> to Geanina</Link>
          <Button><Link to='/geanina'> to Geanina</Link></Button>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Everyone}/>
                <Route exact path="/dan" component={Dan}/>
                <Route exact path="/geanina" component={Geanina}/>
                <Route exact path="/user/:username" component={User} />
              </Switch>
            </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;