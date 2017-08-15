import React from 'react';
import {
  Text,
} from 'react-vr';

class Loading extends React.Component {

  render() {
    if (this.props.visible) {
      return (
          <Text
            style={{
              backgroundColor:'blue',
              padding: 0.02,
              textAlign:'center',
              textAlignVertical:'center',
              fontSize: 0.8,
              layoutOrigin: [0.5, 0.5],
              transform: [{translate: [0, 0, -3]}],
            }}>
            Loading...
          </Text>
      );
    }
    else {
      return null;
    }
  }
}

export default Loading
