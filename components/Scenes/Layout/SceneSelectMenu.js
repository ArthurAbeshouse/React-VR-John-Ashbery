import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr';
import Button from './Elements/Button.js';

//Layout
class SceneSelectMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          width: 3,
          flexDirection: 'column',
          alignItems: 'stretch',
          layoutOrigin: [0.5, 0.5],
          transform: [{translate: [0, 0, -5]}]
        }}
      >
      </View>
    )
  }
}
module.exports = SceneSelectMenu;
