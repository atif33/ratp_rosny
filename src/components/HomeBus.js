import React, {Component} from "react";
import {BusNumber} from "./BusNumber";
import {ApproachBus} from "./ApproachBus";
import axios from 'axios'

export class HomeBus extends Component {
    state = {
        stations: [{}],
        row: [],
        busSelected: null,
        schedules: [{}]
    };

    callbackFunction = (stationsChild, busSelectedChild) => {
        this.setState({
            stations: stationsChild,
            busSelected: busSelectedChild
        });
    };


    // get slug and call approachBus
    getSlugByIndex = (index) => {
        const slug = this.state.stations[index].slug;
        const busSelected = this.state.busSelected;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/${busSelected}/${slug}/A%2BR`)
            .then((response) => {
                this.setState({
                    schedules: response.data.result.schedules
                })
            });

    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <BusNumber parentCallback={this.callbackFunction}/>
                </div>
                <div className="col">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Arrets</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.stations.map((station, index) => (
                            <tr key={index} onClick={() => this.getSlugByIndex(index)}>
                                <td className="btn">{station.name}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="col">
                    <ApproachBus dataFromParent={this.state.schedules}/>
                </div>
            </div>
        )
    }

}
