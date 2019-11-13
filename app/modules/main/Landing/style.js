import { Colors, Sizes } from '../../../configs';

export default {
  container: {
    flex: 1,
    backgroundColor: Colors.main.baseWhite,
    paddingTop: Sizes.isAndroid ? 26 : 8,
  },
  main: {
    image: {
      alignItems: 'center',
    },
    imageSize: {
      width: Sizes.screen.width - 50,
      height: Sizes.screen.width - 50,
    },
    padderTitle: {
      marginTop: -20,
      marginBottom: 30,
      alignItems: 'center',
    },
    text: {
      textAlign: 'center',
      color: Colors.main.baseFont,
      letterSpacing: 1.8,
    },
    padderRightButton: {
      alignItems: 'flex-end',
      paddingTop: 10,
    },
    textSkip: {
      color: Colors.main.baseWhite,
      textAlign: 'center',
      paddingTop: 5,
    },
  },
};
