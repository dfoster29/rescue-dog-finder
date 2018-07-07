import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Saved from "./containers/Saved";
import Survey from "./containers/Survey";
import Results from "./containers/Results";


const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saveddogs" component={Saved}/>
        <Route exact path="/survey" component={Survey}/>
        <Route exact path="/results" component={Results}/>
        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
    </div>
  </Router>
)


export default App;
