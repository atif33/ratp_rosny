import {Component} from "react";
import {Link} from "react-router-dom";
import LogOut from "./auth/LogOut";

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <div className="nav navbar-nav">
                    <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    <Link className="nav-item nav-link"  to="/bus">Bus</Link>
                    <Link className="nav-item nav-link"  to="/"><LogOut/></Link>

                </div>
            </nav>
        )
    }

}
