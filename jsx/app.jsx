import React, {Component} from "react";
import Player from "./components/player";
import WaveForm from "./components/waveform";

class App extends Component {
    componentWillMount() {
        /*$.ajax({
            type: "GET",
            url: "http://on1x.cn/songtaste/list",
            dataType: "json",
            success: (data) => {
                console.log(data)
            }
        })*/
        let data = "102065236|寂寞咖啡 |38061|唐古 |952594|寂寞咖啡 |2083772|241|4|1|0|9674662|3870080|320000|0|31691168|31988045|5728388|5994760|0|001SmOaV3Taefh|004JBnrz31Dj1E|003pchjc29aoe5|31|0";
        console.log(this.formatMusic(data));
    }

    formatMusic(songdata) {
        songdata = unescape(unescape(songdata)).replace(/\+/ig, " ");
        let _arrSongAttr = [
            "mid",
            "msong",
            "msingerid",
            "msinger",
            "malbumid",
            "malbum",
            "msize",
            "minterval",
            "mstream",
            "mdownload",
            "msingertype",
            "size320",
            "size128",
            "mrate",
            "gososo",
            "sizeape",
            "sizeflac",
            "sizeogg"
        ];

        let length = _arrSongAttr.length
        let arrMusic = songdata.split("|")
        let _obj = {}
        let i = 0
        let _length = Math.min(length, arrMusic.length);

        for (i = 0; i < _length; i++)
            _obj[_arrSongAttr[i]] = arrMusic[i];
        for (i = _length; i < length; i++)
            _obj[_arrSongAttr[i]] = "";


        let _data = _obj;
        _data.mruleid = 1E8;
        if (typeof _data.rule_id != "undefined")
            _data.mruleid = data.rule_id;
        _data.desc = "";

        let stream = parseInt(_data.mstream, 10) + 10;
        let sid = parseInt(_data.mid, 10) + 3E7;
        _data.songurl = `http://stream${stream}.qqmusic.qq.com/${sid}.mp3`;

        return _data;
    }

    render() {
        return (
            <div>
                //<WaveForm />
                <Player />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("main"));
