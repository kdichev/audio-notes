import React, { Component } from 'react';
import './App.css';
import Controlls from './components/Controlls.js'
import Player from './components/Player.js'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      src: ""
    };
  }


  // Controlls.js
  onPlay() {
    console.log("Playing");
  }
  onPause() {
    console.log("Paused");
  }
  onRecord() {
    console.log("Recording");
  }
  onDelete() {
    console.log("Deleted");
  }
  onSave() {
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
          onPlay={this.onPlay}
          onPause={this.onPause}
          onRecord={this.onRecord}
          onDelete={this.onDelete}
          onSave={this.onSave}
          counter={this.state.counter}
        />
        <Player source={this.state.src}/>
      </div>
    );
  }
}

export default App;
