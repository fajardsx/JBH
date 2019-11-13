import { Platform } from 'react-native';
import Config from 'react-native-config';

export const BASE_URL =
  Platform.OS === 'android' ? Config.API_URL_ANDROID : Config.API_URL_IOS;
export const RESPONSE_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
};
