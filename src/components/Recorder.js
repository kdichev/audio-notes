import React, { Component } from 'react';


export default class Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div id='dictaphone'>
        <div id='playback_buttons'>
            <button id='rec'>Record</button>
            <button id='stop'>Stop</button>
            <button id='play_pause'>Play/Pause</button>
            <button id='rew'>Rewind</button>
            <button id='ff'>Fastforward</button>
            <button id='save'>Save</button>
        </div>
        <div id="recording_progress_bar">
            <progress value="0" min="0" max="0" id="progress_bar"></progress>
            <div id="progress_time"><b id="time">0:00 / 0:00</b></div>
        </div>
        <audio id='player'></audio>
    </div>
    );
  }
}
