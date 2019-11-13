import { Sizes } from '../../../configs';

export default {
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    flex: -1,
    position: 'absolute',
    width: Sizes.screen.width,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  main: {
    logoContainer: {
      position: 'absolute',
      width: Sizes.screen.width,
      alignItems: 'center',
      top: -120,
    },
    logo: {
      width: Sizes.screen.width - 80,
    },
    imageContainer: {
      position: 'absolute',
      width: Sizes.screen.width,
      bottom: -20,
    },
    image: {
      width: Sizes.screen.width,
    },
    buttons: {
      paddingTop: Sizes.screen.height - 100,
      width: Sizes.screen.width,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
};
