import React, {Component} from "react";
import axios from "axios";

export class BusNumber extends Component {

    state = {
        stations: [{}],
        busNumber: [118, 123, 121],
        busSelected: null
    };

    sendData = () => {
        this.props.parentCallback(this.state.stations, this.state.busSelected);
    };
    submitNumberBus = (e) => {
        const busSelected = this.state.busSelected;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/stations/buses/${busSelected}?way=A`)
            .then((response) => {
                this.setState({
                    stations: response.data.result.stations
                })
            });
        this.sendData();
        e.preventDefault();

    };

    handleChange = (e) => {
        this.setState({busSelected: e.target.value});
    };

    render() {
        return (
            <form onSubmit={this.submitNumberBus}>

                <select className="form-control" onChange={this.handleChange}>
                    {this.state.busNumber.map((numberBus, index) => (
                        <option key={index}>
                            {numberBus}
                        </option>
                    ))}
                </select>
                <button className="btn btn-success">Ok</button>
            </form>
        );
    }
}
