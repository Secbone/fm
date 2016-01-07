import React, {Component} from "react";
import WaveForm from "./components/waveform";

class App extends Component {
    componentWillMount() {
        $.ajax({
            type: "GET",
            url: "http://on1x.cn/songtaste/list",
            dataType: "json",
            success: (data) => {
                console.log(data)
            }
        })
    }
    render() {
        return (
            <div>
                <WaveForm />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("main"));
