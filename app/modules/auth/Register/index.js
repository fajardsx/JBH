import React, { Component } from 'react';
import { View } from 'react-native';
import {
  Base as BaseContainer,
  Padder as PadderContainer,
} from '../../../components/containers';
import { Colors, Sizes } from '../../../configs';
import { TextM } from '../../../components/derivatives/Text';
import ButtonFull from '../../../components/derivatives/Button/ButtonFull';
import { InputString, InputPhone } from '../../../components/derivatives/Input';
import Styles from './style';

export default class Register extends Component {
  shouldComponentUpdate() {}

  renderTitleBody() {
    return (
      <PadderContainer>
        <TextM style={Styles.main.title}>
          Please fill on a few details below
        </TextM>
      </PadderContainer>
    );
  }

  renderForm() {
    return (
      <PadderContainer style={{ marginTop: 14, marginBottom: 35 }}>
        <InputString
          label="Full Name"
          style={Styles.input.email}
          // error="Data tidak boleh kosong"
        />
        <InputString
          secureTextEntry
          label="Email"
          keyboardType="email-address"
          style={Styles.input.password}
          // error="Data tidak boleh kosong"
        />
        <InputPhone
          label="Phone Number"
          keyboardType="phone-pad"
          style={Styles.input.password}
          // error="Data tidak boleh kosong"
        />
      </PadderContainer>
    );
  }

  renderButton() {
    const { navigation } = this.props;
    return (
      <ButtonFull
        height={59}
        size={Sizes.text.m.size}
        line={Sizes.text.m.line}
        width={Sizes.screen.width}
        onPress={() => navigation.navigate('Main')}
        style={Styles.main.button}
        color={Colors.main.baseBlue}
        borderColor={Colors.main.baseWhite}
      >
        CONTINUE
      </ButtonFull>
    );
  }

  render() {
    return (
      <BaseContainer
        title="Please fill on a few details below"
        onBackPress={() => this.props.navigation.pop()}
        backgroundColor={Colors.main.baseWhite}
        topColor={Colors.main.baseWhite}
        bottomContent={this.renderButton()}
        persistScrollTitle
      >
        {this.renderTitleBody()}
        {this.renderForm()}
      </BaseContainer>
    );
  }
}
