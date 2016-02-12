import React, {Component} from "react";

export class Progress extends Component {
    constructor() {
        super();

        this.state = {
            progress: 0,
            color: [24, 226, 68],
        }
    }
    componentWillMount() {
        window.addEventListener("player:time", e => {
            this.setState({
                progress: e.detail.current / e.detail.duration,
            });
        });

        window.addEventListener("player:color", e => {
            this.setState({
                color: e.detail.color,
            });
        });
    }

    render() {
        let progress = {
            width: (this.state.progress*100)+"%",
            backgroundColor: `rgb(${this.state.color[0]}, ${this.state.color[1]}, ${this.state.color[2]})`
        };

        return (
            <div className="progress-bar">
                <div className="progress-value" style={progress}></div>
            </div>
        )
    }
}

export default Progress;
