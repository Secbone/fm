import React, {Component} from "react";

class WaveForm extends Component {
    constructor() {
        super();
        this.state = {
            context: null,
            analyser: null,
            frequencyData: null,
        };
    }
    componentWillMount() {
        this.state.context = new AudioContext();
        this.state.analyser = this.state.context.createAnalyser();
        this.state.analyser.fftSize = 32;
        this.state.frequencyData = new Uint8Array(this.state.analyser.frequencyBinCount);
    }
    componentDidMount() {
        let el = document.getElementById("audio");
        el.crossOrigin = "y.qq.com";
        $("#audio").on("canplay", () => {
            let source = this.state.context.createMediaElementSource(el);
            source.connect(this.state.analyser);
            this.state.analyser.connect(this.state.context.destination);
        });
    }
    startAnimation() {
        let _self = this;
        function keyFrame() {
            requestAnimationFrame(keyFrame);
            _self.state.analyser.getByteFrequencyData(_self.state.frequencyData);
            console.log(_self.state.frequencyData);
        }
        keyFrame();
    }
    render() {
        this.startAnimation();
        let url = "song/encounter.mp3";
        //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
        return (
            <div>
                <audio id="audio" controls src={url} />
                <canvas id="background"></canvas>
            </div>
        )
    }
}

module.exports = WaveForm;
