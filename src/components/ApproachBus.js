import {Component} from "react";
import {connect} from "react-redux";

class ApproachBus extends Component {


    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Destionation</th>
                        <th>Heure</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.schedules.map((result, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{result.destination}</td>
                            <td>{result.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        schedules: state.schedules,
        busSelected: state.busSelected
    }
}

export default connect(mapStateToProps)(ApproachBus);
