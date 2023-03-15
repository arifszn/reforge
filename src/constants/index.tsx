import { ConfigProviderProps } from 'antd/es/config-provider';
import config from '../../config';

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: config.themeColor,
    },
  },
};
