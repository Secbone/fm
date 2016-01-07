import React, {Component} from "react";

class WaveForm extends Component {
    render() {
        let url = "http://stream18.qqmusic.qq.com/30685978.mp3";
        //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
        return (
            <div>
                <audio controls src={url}/>
                <canvas></canvas>
            </div>
        )
    }
}

module.exports = WaveForm;
