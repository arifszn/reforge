import { ConfigProviderProps } from 'antd/es/config-provider';
import reforge from '../../reforge.config';

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: reforge.themeColor,
    },
  },
};
