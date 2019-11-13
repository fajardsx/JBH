import React, {Component} from 'react';
import {Image, View, Animated} from 'react-native';
import {
  Base as BaseContainer,
  Padder as PadderContainer,
  VerticalAnimator as VerticalAnimatorContainer,
} from '../../../components/containers';
import {Colors, Sizes, Images} from '../../../configs';
import ButtonFull from '../../../components/derivatives/Button/ButtonFull';
import Styles from './style';
import i18n from '../../../utils/I18n';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.springValue = new Animated.Value(0.3);
  }

  componentDidMount() {
    this.springLogo();
  }

  springLogo() {
    this.springValue.setValue(0);
    Animated.spring(this.springValue, {
      toValue: 1,
      bounciness: 0,
    }).start();
  }

  renderLogo() {
    return (
      <View style={Styles.main.logoContainer}>
        <Animated.Image
          source={Images.home.logo}
          style={[Styles.main.logo, {transform: [{scale: this.springValue}]}]}
          resizeMode="contain"
        />
      </View>
    );
  }

  renderImage() {
    return (
      <View style={Styles.main.imageContainer}>
        <Image
          source={Images.home.homeScreen}
          style={Styles.main.image}
          resizeMode="contain"
        />
      </View>
    );
  }

  renderButton() {
    const {navigation} = this.props;
    return (
      <VerticalAnimatorContainer order={1}>
        <PadderContainer style={Styles.main.buttons}>
          <ButtonFull
            inverse
            height={46}
            width={Sizes.screen.width / 2 - 22}
            onPress={() => navigation.navigate('Login')}
            style={Styles.submitButton}
            color={Colors.main.baseBlue}
            borderRadius={17}>
            {i18n.t('SIGN_IN')}
          </ButtonFull>
          <ButtonFull
            height={46}
            width={Sizes.screen.width / 2 - 22}
            onPress={() => navigation.navigate('Register')}
            style={Styles.submitButton}
            color={Colors.main.baseBlue}
            borderColor={Colors.main.baseWhite}
            borderRadius={17}>
            {i18n.t('REGISTER')}
          </ButtonFull>
        </PadderContainer>
      </VerticalAnimatorContainer>
    );
  }

  render() {
    return (
      <BaseContainer
        backgroundColor={Colors.main.baseHome}
        topColor={Colors.main.baseHome}
        fixed>
        {this.renderLogo()}
        {this.renderImage()}
        {this.renderButton()}
      </BaseContainer>
    );
  }
}
