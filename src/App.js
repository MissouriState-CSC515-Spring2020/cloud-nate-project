import React from 'react';
import './App.css';
import Nav from './Nav';
import Bigfish from './Bigfish';
import Littlefish from './Littlefish';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import Button from 'react-bootstrap/Button';*/
import Deets from './Deet';

function App() {
  return (

    <Router>
      <div className="App">
        <h1>A Page About A User's Most Recent Photos</h1>
        <br></br>
        <Nav />
        <switch path>
          <Route path="/" exact component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/bigfish" exact component={Bigfish} />
          <Route path="/littlefish" exact component={Littlefish} />
          <Route path="/deets" exact component={Deets} />

        </switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="start-template">
    <br />
    <h2>HomePage: Fishy photos</h2>
    <br />
    <p className="lead">Below are photos categorized as, Fishy.</p>
    <br />
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <title>Big Fish</title>
              <a href="deets"><img src="imgs/shark1.jpg" alt="Shark photo one" height="100%" width="100%" /></a>
              <rect width="100%" height="100%" fill="#55595c">
                <div className="card-body">
                  <p className="card-text">Last opened 2/7/20 at 01:33:32</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                    </div>
                    <small className="text-muted">2/7/20</small>
                  </div>
                </div>
              </rect></div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <title>Big Fish</title>
              <a href="deets"><img src="imgs/shark2.jpg" alt="Shark photo one" height="100%" width="100%" /></a>
              <div className="card-body">
                <p className="card-text">Last opened 2/7/20 at 11:00:02</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                  <small className="text-muted">2/6/20</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
              <title>Small Fish</title>
              <a href="deets"><img src="imgs/goldfsh.jpg" alt=" Goldfish photo one" height="100%" width="100%" /></a>
              <div className="card-body">
                <p className="card-text">Last opened 2/7/20 at 01:00:20</p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  </div>
                  <small className="text-muted">2/5/20</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p>Created by Nate V: 2/21/2020</p>
  </div>
);

/*
const NoMatch = ({location}) => (
<div>
  <h2>No match for <code>{}</code></h2>
</div>
);
*/

export default App;