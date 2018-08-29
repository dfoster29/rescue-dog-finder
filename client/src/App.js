import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Saved from "./containers/Saved";
import Survey from "./containers/Survey";
import DogParks from "./components/DogParkComponent";
import Vets from "./components/Vets";
import PetStores from "./components/PetStores";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/saved_dogs" component={Saved}/>
        <Route exact path="/survey" component={Survey}/>
        <Route exact path="/dogparks" component={DogParks}/>
        <Route exact path="/vetoffices" component={Vets}/>
        <Route exact path="/petstores" component={PetStores}/>
        <Route render={() => (<h1 className="text-center">Page Not Found!</h1>)}/>
      </Switch>
    </div>
  </Router>
)


export default App;
