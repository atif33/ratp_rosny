import React, {Component} from "react";
import axios from 'axios'

export class BusItemStations extends Component {
    state = {
        stations: [{}]
    };


    componentDidMount() {
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/stations/buses/118?way=A`)
            .then((response) => {
                this.setState({
                    stations: response.data.result.stations
                })
            })
    }

    render() {
        return (
            <table class="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Arrets</th>
                </tr>
                </thead>
                <tbody>
                {this.state.stations.map((station, index) => (
                    <tr>
                        <td  key={index}> {index + 1}</td>
                        <td>{station.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}
