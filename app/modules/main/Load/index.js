/* eslint-disable react/forbid-prop-types */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Load extends PureComponent {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    isSeeLanding: PropTypes.number,
    userData: PropTypes.object,
  };

  componentDidMount() {
    const { isSeeLanding, navigation, userData } = this.props;
    if (isSeeLanding === 0 && userData.token === '') {
      navigation.replace('Landing');
    } else if (isSeeLanding === 1 && userData.token === '') {
      navigation.replace('Home');
    } else {
      navigation.replace('Main');
    }
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => ({
  isSeeLanding: state.session.isSeeLanding,
  userData: state.session.userData,
});

export default connect(
  mapStateToProps,
  null
)(Load);
