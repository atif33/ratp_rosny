import React, {Component} from "react";
import BusNumber from "./BusNumber";
import ApproachBus from "./ApproachBus";
import BusStations from "./BusStations";
import User from "./users/User";

class HomeBus extends Component {

    render() {
        return (

            <div className="row">
                <div className="col">
                    <User/>
                </div>
                <div className="col">
                    <BusNumber/>
                </div>
                <div className="col">
                    <BusStations/>
                </div>
                <div className="col">
                    <ApproachBus/>
                </div>
            </div>
        )
    }
}

export default HomeBus;
