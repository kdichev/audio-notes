import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MicIcon from 'material-ui/svg-icons/av/mic';
import RecIcon from 'material-ui/svg-icons/av/fiber-manual-record';
import PlayIcon from 'material-ui/svg-icons/av/play-circle-filled';
import PauseIcon from 'material-ui/svg-icons/av/pause';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import CleckIcon from 'material-ui/svg-icons/action/check-circle';
import Badge from 'material-ui/Badge';
import TickIcon from 'material-ui/svg-icons/action/done';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
  button : {
    position: "absolute",
    left: 4,
    top: 2,
    zIndex: 4,
  },
  progress : {
    position: "absolute",
    left: 2,
    size: 64,
    zIndex: 3,
    transform: "rotate(270deg)"
  },
  badge: {
    position: "absolute",
    padding: "0 !important",
    top:0,
    right:0,
    zIndex: 5,
  },
  badgeStyle: {
    'backgroundColor': "#fc566a",
     width: 22,
     height: 22,
     zIndex: 5,
     boxShadow: "rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px"
  },
  actionBtnWrapper: {
    position: "relative",
    width: "100%",
    height: 65,
    zIndex: 2
  },
  controls: {
    width: "35px",
    height: 102,
    paddingBottom: 25,
    backgroundColor: "#171517",
    margin:"0 auto"
  },
  mainWrapper: {
    width: 70,
    height: 195,
    padding: 5,
    zIndex: 1,
    backgroundColor: "grey"
  }
}

export default class Controlls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: this.props.counter
    };
  }

  render() {
    return (
        <MuiThemeProvider>
          <div style={style.mainWrapper}>
            <div id="action-ctrl" style={style.controls}>
              <div style={{margin: "0 auto", width: 17, paddingTop: 15}}>
                <DeleteIcon
                  id="delete"
                  color="white"
                  style={{paddingTop: 10, width: 17, height: 17,}}
                  hoverColor="gray"
                  onTouchTap={this.props.onDelete}
                />
                {!this.props.playing
                  ?<PlayIcon
                    id="play"
                    color="white"
                    style={{paddingTop: 10, width: 17, height: 17,}}
                    hoverColor="gray"
                    onTouchTap={this.props.onPlay}
                  />
                  :<PauseIcon
                    id="play"
                    color="red"
                    style={{paddingTop: 10, width: 17, height: 17,}}
                    hoverColor="gray"
                    onTouchTap={this.props.onPause}
                  />
                }
                <CleckIcon
                  id="check"
                  color="white"
                  style={{paddingTop: 10, width: 17, height: 17,}}
                  hoverColor="gray"
                  onTouchTap={this.props.onSave}
                />
              </div>
            </div>
            <div id="action-btn" style={style.actionBtnWrapper}>
              {this.props.saved &&
                <Badge
                  badgeContent={<TickIcon style={{width: 13}} color="white"/>}
                  primary={true}
                  style={style.badge}
                  badgeStyle={style.badgeStyle}
                  id="badge"
                />
              }

              <CircularProgress
                mode="determinate"
                value={this.state.progress}
                style={style.progress}
                size={style.progress.size}
                color="white"
                thickness={7}
              />

              <FloatingActionButton
                id="action-button"
                style={style.button}
                iconStyle={{color:"red"}}
                onTouchTap={() => {
                  if (!this.props.recording) {
                    this.props.onRecord();
                  } else {
                    this.props.onRecordStop();
                  }

                }}
                iconStyle={{color: "grey"}}
                zDepth={1}
              >
                {!this.props.recording
                 ? <MicIcon style={{width: 50}} color="red"/>
                 : <RecIcon style={{width: 50}} color="grey" hoverColor="red"/>
                 }
              </FloatingActionButton>
            </div>
            {/* <div>{this.state.progress}</div>
            <button onClick={() => {this.props.onPlay(); }}>Play</button>
            <button onClick={this.props.onPause}>Pause</button>
            <button onClick={this.props.onStop}>Stop</button>
            <button onClick={this.props.onRecordStop}>Stop Record</button>
            <button onClick={this.props.onDelete}>Delete</button>
            <button onClick={this.props.onSave}>Save</button> */}
          </div>
        </MuiThemeProvider>
    );
  }
}
