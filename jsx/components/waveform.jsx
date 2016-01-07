import React, {Component} from "react";

class WaveForm extends Component {
    constructor() {
        super();
        this.state = {
            context: null
        };
    }
    componentWillMount() {
        this.state.context = new AudioContext();
    }
    componentDidMount() {
        let el = document.getElementById("audio");
    }
    render() {
        let url = "http://stream8.qqmusic.qq.com/16787761.wma";
        //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
        return (
            <div>
                <audio id="audio" controls autoPlay src={url}/>
                <canvas></canvas>
            </div>
        )
    }
}

module.exports = WaveForm;
