import { Colors, Sizes } from '../../../configs';

export default {
  main: {
    title: {
      textAlign: 'left',
      color: Colors.main.baseFont,
      fontFamily: 'Poppins-Bold',
      letterSpacing: 1.8,
    },
    footer: {
      paddingTop: 30,
      flex: -1,
      position: 'absolute',
      fontFamily: 'Poppins-Medium',
      width: Sizes.screen.width,
      bottom: 0,
      justifyContent: 'space-between',
    },
  },
  input: {
    email: {
      marginBottom: 32,
    },
    password: {
      marginBottom: 12,
    },
  },
};
