import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import SignIn from "./components/auth/SignIn";
import HomeBus from "./components/HomeBus";
import {useAuth0} from "@auth0/auth0-react";
import ProtectedRoute from "./components/auth/ProtectedRoutes";


function App() {
    const {isAuthenticated} = useAuth0();
    return (
        <BrowserRouter>
            {isAuthenticated && <Navbar/>}
            <div className="container">
                <Switch>
                    <Route exact path="/" component={SignIn}/>
                    <ProtectedRoute exact path="/bus" component={HomeBus}/>
                    <Route path="*">
                        <div>Page 4040</div>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
