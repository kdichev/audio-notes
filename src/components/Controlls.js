import React, { Component } from 'react';


export default class Controlls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.counter
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState ({
      progress: nextProps.counter
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.progress}</div>
        <button onClick={() => {this.props.onPlay(); }}>Play</button>
        <button onClick={this.props.onPause}>Pause</button>
        <button onClick={this.props.onRecord}>Record</button>
        <button onClick={this.props.onDelete}>Delete</button>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}
