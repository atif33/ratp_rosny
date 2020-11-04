import {Component} from "react";

export class ApproachBus extends Component {
    state = {
        schedules: [{}]
    };


    componentDidMount() {
        this.setState({
            schedules: this.props.dataFromParent
        })
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps.dataFromParent);
        console.log(this.props.dataFromParent);
        const oldProps = this.props.dataFromParent;
        if (oldProps!== newProps) {
            this.setState({
                schedules: this.props.dataFromParent
            })
        }
    }

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
                    {this.state.schedules.map((result, index) => (
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
