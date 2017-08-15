import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Button from './components/Scenes/Layout/Elements/Button.js';
import Room from './components/Room.js';
import VideoPlayer from './components/Scenes/VideoPlayer.js';

class WelcomeToVR extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
      isroomImageVisible: true,
      roomName: asset('03-1.jpg')
    }
  }

  render() {
    return (
      <View>

        <Button text={'Shemp'} />

        <VideoPlayer image={this.state.roomName}  text={"Back to Dashboard"}/>

      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
