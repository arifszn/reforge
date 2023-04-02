//config.ts

enum LayoutType {
  MIX = 'mix',
  TOP = 'top',
  SIDE = 'side',
}

const CONFIG = {
  appName: 'Reforge',
  helpLink: 'https://github.com/arifszn/reforge',
  theme: {
    accentColor: '#30BEB8',
    sidebarLayout: LayoutType.MIX,
  },
  metaTags: {
    title: 'Reforge',
    description:
      'An out-of-box UI solution for enterprise applications as a React boilerplate.',
    imageURL: 'logo.svg',
  },
};

export default CONFIG;
