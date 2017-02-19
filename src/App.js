import React, { Component } from 'react';
import './App.css';
import Controlls from './components/Controlls.js'
import Player from './components/Player.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 20,
      src: "",
      shouldPlay: false,
      shouldStop: false,
      shouldPause: false
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

  onRecordStart() {
    console.log("Recording");
  }

  onRecordStop() {
    console.log("Stop Recording");
  }

  onRecordDelete() {
    console.log("Deleted");
  }
  onRecordSave() {
    console.log("Saved");
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
      src: "https://www.w3schools.com/tags/horse.ogg"
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
