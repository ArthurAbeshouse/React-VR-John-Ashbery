import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Animated
} from 'react-vr';

export default class Room extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       fadeAnim: new Animated.Value(0), // init opacity 0
     };
   }
  componentDidMount() {
       Animated.timing(
         this.state.fadeAnim,
         {toValue: 1}
       ).start();
     }
  render() {
    return (
      <Animated.View
         style={{opacity: this.state.fadeAnim}}>
         <Pano source={this.props.image}
         onLoad={this.props.onLoad}
        onError={this.props.onError}
        />
        </Animated.View>
    );
  }
};
