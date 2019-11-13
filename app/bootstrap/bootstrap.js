import React, { PureComponent } from 'react';
import OneSignal from 'react-native-onesignal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { setDeviceId } from '../modules/auth/authActions';

class Bootstrap extends PureComponent {
  static propTypes = {
    setDeviceId: PropTypes.func,
    children: PropTypes.node,
  }

  constructor(properties) {
    super(properties);

    this.onIds = this.onIds.bind(this);
    this.onReceived = this.onReceived.bind(this);
    this.onOpened = this.onOpened.bind(this);

    OneSignal.init('7bdc45e4-7213-437a-93b1-f6236b5e8b7c');
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    OneSignal.configure();
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log('notification:', notification);
  };

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  onIds(device) {
    const { setDeviceId } = this.props;
    setDeviceId(device.userId);
  }

  render() {
    const { children } = this.props;
    return <View style={styles.container}>{children}</View>;
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

const mapDispatchToProps = {
  setDeviceId: payload => setDeviceId(payload),
};

export default connect(
  null,
  mapDispatchToProps
)(Bootstrap);
