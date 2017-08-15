import React from 'react';
import {
  Pano,
  asset,
  StyleSheet,
  Text,
  VrButton,
  View,
  Image,
} from 'react-vr';
import Loading from './Loading';
import Room from '../../../Room'

export default class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoadImageVisible: true,
      roomName: asset('03-1.jpg')
   };

    this.styles = StyleSheet.create({

	  button: {
		margin: 0.05,
        height: 0.4,
        width: 1.5,
        backgroundColor: 'red',
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        transform: [{translate: [0, 0, -3]}],
  },
buttontext:{
  fontSize: 0.3,
  textAlign: 'center',
},

    button2: {
    margin: 0.05,
        height: 0.4,
        width: 1.5,
        backgroundColor: 'purple',
        layoutOrigin: [0.5, 0.5],
        paddingLeft: 0.2,
        paddingRight: 0.2,
        transform: [{translate: [0, -0.5, -3]}],
      },
      button3: {
      margin: 0.05,
          height: 0.4,
          backgroundColor: 'blue',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          transform: [{translate: [0, 0, -3]}],
  }
	});
  }
  setCurrentRoom(roomName) {
      console.log("IN HERE");
      console.log(roomName);
      this.setState({ roomName: asset(roomName)});
    }

    handleImageLoaded() {
      this.setState({ isLoadImageVisible: false });
    }

    handleImageErrored() {
    //  this.setState({ imageStatus: 'failed to load' });
    }
    animateIn = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0.125,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }

  animateOut = () => {
    Animated.timing(
      this.state.animatedTranslation,
      {
        toValue: 0,
        duration: 100,
        easing: Easing.in,
      }
    ).start();
  }
  render() {
    return (
      <View>
        <Loading visible={this.state.isLoadImageVisible}/>
        <Room image={this.state.roomName}
          onLoad={this.handleImageLoaded.bind(this)}
          onError={this.handleImageErrored.bind(this)}
          />
      <VrButton style={this.styles.button}
        onClick={() => { this.setCurrentRoom('02-1.jpg');
        }
      }>
     <Text style={this.styles.buttontext}>
        {this.props.text}</Text>
      </VrButton>
      <VrButton style={this.styles.button2}
        onClick={() => this.setCurrentRoom('03-1.jpg')}>
     <Text style={this.styles.buttontext}>
        {this.props.text}</Text>
      </VrButton>
      </View>
    );
   }
  }
