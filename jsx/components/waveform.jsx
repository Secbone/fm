import React, {Component} from "react";
import CabJS from "cabjs";

class WaveForm extends Component {
    constructor() {
        super();
        this.state = {
            context: null,
            analyser: null,
            frequencyData: null,
            rect_list: [],
        };
    }
    componentWillMount() {
        this.state.context = new AudioContext();
        this.state.analyser = this.state.context.createAnalyser();
        this.state.analyser.fftSize = 64;
        this.state.frequencyData = new Uint8Array(this.state.analyser.frequencyBinCount);
        for(let i=0; i<32; i++){
            this.state.rect_list.push(CabJS.RectClass.extend({
                x: 40*i,
                y: 0,
                width: 38,
                height: 100,
                color: "rgba(130, 212, 96, 0.4)",
                keyframe: function() {
                    this.y = CabJS._context.height - this.height;
                }
            }));
        }
    }
    componentDidMount() {
        let el = document.getElementById("audio");
        el.crossOrigin = "y.qq.com";
        $("#audio").on("canplay", () => {
            let source = this.state.context.createMediaElementSource(el);
            source.connect(this.state.analyser);
            this.state.analyser.connect(this.state.context.destination);
        });
        $("#background").attr("width", $(window).width()+"px");
        $("#background").attr("height", $(window).height()+"px");
        let _self = this;
        CabJS.preframe(function() {
            _self.keyFrame();
        });
        CabJS.start("background");
    }
    keyFrame() {
        this.state.analyser.getByteFrequencyData(this.state.frequencyData);
        for(let i=0; i<this.state.rect_list.length; i++){
            this.state.rect_list[i].height = this.state.frequencyData[i]*1.5+20;
        }
    }
    render() {
        let url = "song/encounter.mp3";
        //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
        return (
            <div>
                <audio id="audio" autoPlay controls src={url} />
                <canvas id="background"></canvas>
            </div>
        )
    }
}

export default WaveForm;
