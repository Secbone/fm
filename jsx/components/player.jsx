import React, {Component} from "react";
import CabJS from "cabjs";

export class Player extends Component {
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
        this.state.analyser.fftSize = 64;
        this.state.frequencyData = new Uint8Array(this.state.analyser.frequencyBinCount);
    }
    componentDidMount() {
        this.refs.audio.addEventListener("canplay", () => {
            let source = this.state.context.createMediaElementSource(this.refs.audio);
            source.connect(this.state.analyser);
            this.state.analyser.connect(this.state.context.destination);
        });

        let e = new CustomEvent("player:size", {
            detail: this.state.analyser.fftSize/2
        });
        window.dispatchEvent(e);

        let _self = this;
        CabJS.preframe(function() {
            _self.triggerTime();
            _self.triggerData();
        });
    }
    triggerTime() {
        let e = new CustomEvent("player:time", {
            detail: {
                duration: this.refs.audio.duration,
                current: this.refs.audio.currentTime,
            },
        });

        window.dispatchEvent(e);
    }
    triggerData() {
        this.state.analyser.getByteFrequencyData(this.state.frequencyData);
        let e = new CustomEvent("player:data", {
            detail: {
                frequencyData: this.state.frequencyData
            },
        });

        window.dispatchEvent(e);
    }
    render() {
        let url = "song/encounter.mp3";

        return (
            <audio ref="audio" autoPlay controls src={url}></audio>
        )
    }
}

export default Player;
