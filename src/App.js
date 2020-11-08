import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import SignIn from "./components/auth/SignIn";
import HomeBus from "./components/HomeBus";
import {useAuth0} from "@auth0/auth0-react";


function App() {
    const {isAuthenticated} = useAuth0();
    let pageLogin = window.location.origin + '/bus';
    console.log(pageLogin);
    return (
        <BrowserRouter>
            {isAuthenticated && <Navbar/>}
            <div className="container">
                <Switch>
                    <Route exact path="/" component={SignIn}/>
                    <Route exact path="/bus" component={HomeBus}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
