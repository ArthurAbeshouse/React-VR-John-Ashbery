import React from 'react';
import {
  Text,
  View,
  asset,
  Pano
} from 'react-vr';
import VideoPlayerLayout from './Layout/VideoPlayerLayout.js'

//Scene
class VideoPlayer extends React.Component {
  render() {
    return (
      <View>
        <VideoPlayerLayout
        video={asset("smile.mp4")}
        text={"Back to Dashboard"}
        />
      </View>
    )
  }
}
export default VideoPlayer
