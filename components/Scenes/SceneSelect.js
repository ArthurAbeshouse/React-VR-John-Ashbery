import React from 'react';
import {
  View,
  Text,
  VrButton
} from 'react-vr';
import SceneSelectMenu from './Layouts/SceneSelectMenu.js';

//Scene
class SceneSelect extends React.Component {
  render() {
    return (
      <SceneSelectMenu/>
    )
  }
}
module.exports = SceneSelect;
