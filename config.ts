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
      'Frontend solution for enterprise applications built with Tailwind and Ant Design.',
    imageURL: 'logo.svg',
  },
};

export default CONFIG;
