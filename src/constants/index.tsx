import { ConfigProviderProps } from 'antd/es/config-provider';
import enUSIntl from 'antd/locale/en_US';

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      colorPrimary: CONFIG.theme.accentColor,
    },
  },
  locale: enUSIntl,
};
