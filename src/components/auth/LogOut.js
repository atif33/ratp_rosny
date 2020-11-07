import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function LogOut() {
    const {logout, isAuthenticated} = useAuth0();
    console.log(isAuthenticated)
    return (
        isAuthenticated && (
            <div>
                <button className="btn btn-danger" onClick={() => logout()}>LogOut</button>
            </div>)
    )
}
