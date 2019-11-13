import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Image} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Base as BaseContainer,
  Padder as PadderContainer,
} from '../../../components/containers';
import {Colors} from '../../../configs';
import {TextM, TextXL, TextS} from '../../../components/derivatives/Text';
import {Button} from '../../../components/generics';
import Styles from './style';
import Images from '../../../configs/Images';
import i18n from '../../../utils/I18n';
import {setSeeLanding} from '../../auth/authActions';

const slides = [
  {
    key: 'walk1',
    title: 'Hello !',
    subTitle: i18n.t(
      'welcome_to_jakBikeHub_feel_free_and_enjoy_your_ride_with_simple_way',
    ),
    image: Images.landing.walktrough1,
  },
  {
    key: 'walk2',
    subTitle: i18n.t('register_your_account_take_a_picture_of_your_ID_Card'),
    image: Images.landing.walktrough2,
  },
  {
    key: 'walk3',
    subTitle: i18n.t(
      'find_nearest_shelter_from_your_location_choose_one_and_Unlock_it',
    ),
    image: Images.landing.walktrough3,
  },
  {
    key: 'walk4',
    subTitle: i18n.t('Enjoy_and_have_fun'),
    image: Images.landing.walktrough4,
  },
];

class Landing extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    setSeeLanding: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onDone = this.onDone.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  shouldComponentUpdate() {}

  onDone() {
    const {navigation, setSeeLanding} = this.props;
    setSeeLanding();
    navigation.replace('Home');
  }

  renderItem(item) {
    return (
      <View style={Styles.container}>
        {this.renderRightButton()}
        <View style={Styles.main.image}>
          <Image source={item.image} style={Styles.main.imageSize} />
        </View>
        {this.renderTitle(item.title)}
        {this.renderSubTitle(item.subTitle)}
      </View>
    );
  }

  renderRightButton() {
    return (
      <PadderContainer style={Styles.main.padderRightButton}>
        <Button
          height={30}
          width={80}
          paddingBottom={4}
          onPress={this.onDone}
          borderRadius={50}>
          <TextS style={Styles.main.textSkip}>{i18n.t('skip')}</TextS>
        </Button>
      </PadderContainer>
    );
  }

  renderTitle(text) {
    return (
      <PadderContainer style={Styles.main.padderTitle}>
        <TextXL style={Styles.main.text}>{text}</TextXL>
      </PadderContainer>
    );
  }

  renderSubTitle(text) {
    return (
      <PadderContainer>
        <TextM style={Styles.main.text}>{text}</TextM>
      </PadderContainer>
    );
  }

  render() {
    return (
      <BaseContainer
        backgroundColor={Colors.main.baseWhite}
        topColor={Colors.main.baseWhite}
        fixed>
        <AppIntroSlider
          renderItem={this.renderItem}
          slides={slides}
          onDone={this.onDone}
          activeDotStyle={{backgroundColor: Colors.main.baseBlue}}
        />
      </BaseContainer>
    );
  }
}

const mapDispatchToProps = {
  setSeeLanding: () => setSeeLanding(),
};

export default connect(null, mapDispatchToProps)(Landing);
