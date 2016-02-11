import React, {Component} from "react";

export class Progress extends Component {
    constructor() {
        super();

        this.state = {
            progress: 0,
        }
    }
    componentWillMount() {
        window.addEventListener("player:time", e => {
            this.setState({
                progress: e.detail.current / e.detail.duration,
            });
        })
    }

    render() {
        let progress = {
            width: (this.state.progress*100)+"%",
        };
        
        return (
            <div className="progress-bar">
                <div className="progress-value" style={progress}></div>
            </div>
        )
    }
}

export default Progress;
