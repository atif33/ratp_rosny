import React, {Component} from "react";
import BusNumber from "./BusNumber";
import ApproachBus from "./ApproachBus";
import BusStations from "./BusStations";

class HomeBus extends Component {

    render() {
        return (
            <div className="row">
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
