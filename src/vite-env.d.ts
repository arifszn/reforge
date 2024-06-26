/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_ENABLE_PWA: string;
  readonly VITE_THEME_ACCENT_COLOR: string;
  readonly VITE_THEME_SIDEBAR_LAYOUT: string;
  readonly VITE_SHOW_BREADCRUMB: string;

  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
