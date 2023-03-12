import { ConfigProviderProps } from 'antd/es/config-provider';
import rewindr from '../../rewindr.config';

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: rewindr.themeColor,
    },
  },
};
