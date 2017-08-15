import React from 'react';
import {
  View,
  VrButton,
  StyleSheet,
  Text
} from 'react-vr';
import VideoElement from './Elements/VideoElement.js';
//Layout
class VideoPlayerLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        shouldStartVideo: false
     };
this.styles = StyleSheet.create({
  button3: {
  margin: 0.05,
      height: 0.4,
      backgroundColor: 'blue',
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      transform: [{translate: [0, -1, -3]}],
    }
});
  }
  render() {
      return (
        <View>
          <View style={{
            flex: 1,
            width: 8,
            flexDirection: 'column',
            alignItems: 'stretch',
            backgroundColor: '#333333',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}]
          }}>
          <VideoElement video={this.props.video}
          shouldStartVideo={this.state.shouldStartVideo}
          />
          </View>

        <View style={{
            flex: 1,
            width: 2.5,
            flexDirection: 'column',
            alignItems: 'stretch',
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [1.2, 1.4, 1]}]
          }}>

          <VrButton style={this.styles.button3}
          onClick={() => this.setState({shouldStartVideo: true})}>
            <Text style={this.styles.buttontext}>
             {this.props.text}
             </Text>
          </VrButton>
          </View>
        </View>
      )
    }
  }
export default VideoPlayerLayout
