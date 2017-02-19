import React, { Component } from 'react';


export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
    source: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("hello", );
    this.setState({
      source: nextProps.source
    })
  }

  render() {
    return (
      <div>
        {this.props.source &&
          <audio id="player">
            <source id="audioSrc" src={this.state.source} type="audio/webm" />
            Your browser does not support the audio tag.
          </audio>
        }
      </div>
    );
  }
}
