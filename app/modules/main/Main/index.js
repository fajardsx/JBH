/* eslint-disable react/require-optimization */
import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Switch,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  componentDidMount() {
    try {
      navigator.geolocation.getCurrentPosition(
        position =>
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            longitudeDelta: 0.04,
            latitudeDelta: 0.04,
          }),
        error => console.log(error.message),
        {
          enableHighAccuracy: false,
          timeout: 5000,
        }
      );
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        initialRegion={this.state}
        region={{
          latitude: this.state.latitude,
          longitude: this.state.longitude,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta: this.state.longitudeDelta,
        }}
      />
    );
  }
}
