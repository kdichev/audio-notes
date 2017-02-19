import React, { Component } from 'react';


export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      source: this.props.source,
    };
  }

  render() {
    return (
      <div>
        <audio controls>
          <source src={this.state.source} type="audio/ogg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    );
  }
}
