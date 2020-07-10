import React, { Suspense, Component }from 'react';
import './App.css';
import Filter from './Filter';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="App">
          <h1 className="App-header">Hello</h1>
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={Filter}/>
                
              </Switch>
            </Suspense>
          </Router>
      </div>
    );
  }
}

export default App;