import React from 'react';
import {
  Video,
  View,
  asset,
  MediaPlayerState,
  VideoControl
} from 'react-vr';
//Element
class VideoElement extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
   playerState: new MediaPlayerState({autoPlay: true, muted: false}), // init with muted, autoPlay
  };
}
  render() {
    if (this.props.shouldStartVideo) {
    return (
      <View style={{ margin: 0.1, height: 4}}>
        <Video style={{height: 4}} source={this.props.video}  playerState={this.state.playerState} />
        <VideoControl
       style={{height: 0.2, width: 4}}
       playerState={this.state.playerState} />
      </View>
      )
    }
    else {
      return null;
    }
  }
}
export default VideoElement
