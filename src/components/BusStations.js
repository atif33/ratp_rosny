import React, {Component} from "react";
import axios from "axios";
import store from "../store/store";
import {busScheduls} from "../store/actions/busStations";
import {connect} from "react-redux";

class BusStations extends Component {
    getSlugByIndex = (index) => {
        const slug = this.props.stations[index].slug;
        const busSelected = this.props.busSelected;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/schedules/buses/${busSelected}/${slug}/A%2BR`)
            .then((response) => {
                store.dispatch(busScheduls(response.data.result.schedules));
            });
    };

    render() {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>Arrets</th>
                </tr>
                </thead>
                <tbody>
                {this.props.stations.map((station, index) => (
                    <tr key={index} onClick={() => this.getSlugByIndex(index)}>
                        <td className="btn">{station.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

function maptSateToPrps(state) {
    return {
        stations: state.stations,
        busSelected: state.busSelected
    }
}

export default connect(maptSateToPrps)(BusStations);
