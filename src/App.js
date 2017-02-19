import React, { Component } from 'react';
import './App.css';
import Controlls from './components/Controlls.js'
import Player from './components/Player.js'
import RecordRTC from 'recordrtc';
import { captureUserMedia } from './AppUtils';
import AWS from 'aws-sdk';

const baseURL = "https://s3.amazonaws.com/itsoncraft-audionotes/"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 20,
      src: "",
      shouldPlay: false,
      shouldStop: false,
      shouldPause: false,
      recordVideo: null
    };
  }



  // Controlls.js
  onPlayerPlay = () => {
    console.log("Playing");
    let audio = document.getElementById('player');
    audio.play();
  }
  onPlayerPause = () => {
    console.log("Paused");
    let audio = document.getElementById('player');
    audio.pause();
  }
  onPlayerStop = () => {
    console.log("Stop");
    let audio = document.getElementById('player');
    audio.pause();
    audio.currentTime = 0
  }

  onRecordStart = () => {
    console.log("Recording");
    captureUserMedia((stream) => {
      this.setState({
        recordVideo: RecordRTC(stream, { type: 'audio' }),
      })
      this.state.recordVideo.startRecording();
    });
  }

  onRecordStop = () => {
    console.log("Stop Recording");
    this.state.recordVideo.stopRecording(() => {
       let params = {
         type: 'video/webm',
         data: this.state.recordVideo.blob,
         id: Math.floor(Math.random()*90000) + 10000
       }
       this.state.recordVideo.id = Math.floor(Math.random()*90000) + 10000;
     });
  }

  onRecordDelete() {
    console.log("Deleted");
  }
  onRecordSave = () => {
    console.log("Saved");
    let id = this.state.recordVideo.id;
    this.saveItToAmazon(this.blobToFile(this.state.recordVideo.blob, "audioNote" + id + ".webm"))
  }


  blobToFile = (theBlob, fileName) => {
    //A Blob() is almost a File() - it's just missing the two properties below which we will add
    theBlob.lastModifiedDate = new Date();
    theBlob.name = fileName;
    return theBlob;
  }


  saveItToAmazon = (blob) =>   {
    AWS.config.region = "us-east-1"; // 1. Enter your region

    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        IdentityPoolId: 'us-east-1:5856fbaa-0c13-4196-9f75-220bfe180890' // 2. Enter your identity pool
    });

    AWS.config.credentials.get(function(err) {
        if (err) console.log(err);
        console.log(AWS.config.credentials);
    });

    var bucketName = 'itsoncraft-audionotes'; // Enter your bucket name
    var bucket = new AWS.S3({
        params: {
            Bucket: bucketName
        }
    });

    var contentType = 'audio/webm';
    // var blob = new Blob(blob, { type: contentType });
    // var file = new File([blob], 'you_name.webm', {type: contentType, lastModified: Date.now()});

        // results.innerHTML = '';
    var params = {
        Key: blob.name,
        ContentType: contentType,
        Body: blob,
        ACL: 'public-read'
    };


    bucket.putObject(params,(err, data) => {
        if (err) {
         alert('error')
            // results.innerHTML = 'ERROR: ' + err;
        } else {
         console.log(data);
         console.log(blob);
         this.updateAudioSrc(baseURL + blob.name)
        }
    });

}

  updateAudioSrc = (src) => {
    this.setState({
      src: src
    })
  }

  progressCounter() {
    this.setState({
      counter: 10
    })
  }

  componentDidMount() {
    this.progressCounter();
  }

  componentWillMount() {
    this.setState({
      src: baseURL + "asd.webm"
    })
  }

  render() {
    return (
      <div className="App">
        <Controlls
          onPlay={this.onPlayerPlay}
          onPause={this.onPlayerPause}
          onStop={this.onPlayerStop}
          onRecord={this.onRecordStart}
          onRecordStop={this.onRecordStop}
          onDelete={this.onRecordDelete}
          onSave={this.onRecordSave}
          counter={this.state.counter}
        />
        <Player
          source={this.state.src}
        />
      </div>
    );
  }
}

export default App;
