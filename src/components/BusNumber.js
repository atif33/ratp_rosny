import React, {Component} from "react";
import axios from "axios";
import store from "../store/store.js";
import {busesNumbers, busSelectedNumber, busStations} from "../store/actions/busStations";
import {connect} from "react-redux";

class BusNumber extends Component {
    componentDidMount(): void {
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/lines/buses`)
            .then((response) => {
                store.dispatch(busesNumbers(response.data.result.buses));
            });
    }

    submitNumberBus = (e) => {

        const busSelected = this.state.busSelected;
        axios.get(`https://api-ratp.pierre-grimaud.fr/v4/stations/buses/${busSelected}?way=A`)
            .then((response) => {
                store.dispatch(busStations(response.data.result.stations));
            });
        e.preventDefault();
    };

    handleChange = (e) => {
        this.setState({busSelected: e.target.value});
        store.dispatch(busSelectedNumber(e.target.value));
    };

    render() {
        return (
            <form onSubmit={this.submitNumberBus}>
                <select className="form-control" onChange={this.handleChange}>
                    {this.props.busNumbers.map((numberBus, index) => (
                        <option key={index}>
                            {numberBus.code}
                        </option>
                    ))}
                </select>
                <button className="btn btn-success">Ok</button>
            </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        busNumbers: state.busNumbers
    }
}

export default connect(mapStateToProps)(BusNumber);

