import React, {Component} from "react";
import CabJS from "cabjs";

export class WaveForm extends Component {
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
        window.addEventListener("player:size", e => {
            for(let i=0; i<e.detail; i++) {
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
        });
    }

    componentDidMount() {
        $(this.refs.background).attr("width", $(window).width()+"px");
        $(this.refs.background).attr("height", $(window).height()+"px");

        let _self = this;
        window.addEventListener("player:data", function(e) {
            _self.drawWave(e);
        });
        CabJS.start(this.refs.background);
    }

    drawWave(e) {
        for(let i=0; i<this.state.rect_list.length; i++){
            this.state.rect_list[i].height = e.detail.frequencyData[i]*1.5+20;
        }
    }

    render() {
        //let url = "http://m8.songtaste.com/201601042113/b3f90882f40cf165a9da9068649ee0b7/g/20130827/8/8c/8c7dde6be84c8a5312e57e2a67f640b9.mp3";
        return (
            <div>
                <canvas id="background" ref="background"></canvas>
            </div>
        )
    }
}

export default WaveForm;
