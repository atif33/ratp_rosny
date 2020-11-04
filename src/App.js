import './App.css';
import React from "react";
import {ApproachBus} from "./components/ApproachBus";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {BusNumber} from "./components/BusNumber";
import {HomeBus} from "./components/HomeBus";


function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={HomeBus}/>
                    <Route exact path="/bus:numberBus" component={ApproachBus}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
