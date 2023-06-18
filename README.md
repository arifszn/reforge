<br/>

<p align="center">
  
  <h1 align="center">
    <img src="https://user-images.githubusercontent.com/45073703/225269899-d0d3b91c-b09b-4835-ac78-c0e0be4632fe.png" width="30%">
  </h1>
  <h4 align="center">An out-of-box UI solution for enterprise applications as a React boilerplate.</h4>

  <p align="center">
    <a href="https://reforge.netlify.app"><b>Demo</b></a>
    ·
    <a href="https://github.com/arifszn/reforge/issues"><b>Report Bug</b></a>
    ·
    <a href="https://github.com/arifszn/reforge/discussions/categories/ideas"><b>Request Feature</b></a>
  </p>
</p>

<p align="center">
  <a href="https://reforge.netlify.app">
    <img src="https://user-images.githubusercontent.com/45073703/235440010-065d07a1-f387-4f0b-a3a2-879b2d62d1d4.gif" alt="Preview" width="60%"/>
  </a>
  <br/>
  <a href="#arifszn"><img src="https://arifszn.netlify.app/assets/img/drop-shadow.png" width="50%" alt="Shadow"/></a>
</p>

## Features

- Elegant and customizable UI using `Tailwindcss` and `Ant Design`.
- Single page application using `React Router`.
- Mock API request using `reqres`.
- Powerful layout and table using `@ant-design/pro-components`.
- Code splitting and lazy loading component using `@loadable/component`.
- State management using `react-redux` and `@reduxjs/toolkit`.
- Persistent redux state using `redux-persist`.
- Loading progress bar using `nprogress`.
- `ESLint` and `Prettier` enabled.
- Option to enable Progressive Web App (PWA). (Only available in production build)
- Axios interceptor enabled to handle API authorization.
- Automated workflow for checking new Pull Request.

## Demo

https://reforge.netlify.app

### Credentials

- **Email:** `eve.holt@reqres.in`
- **Password:** `password`

## Usage

- Clone the project and change directory.

  ```shell
  git clone https://github.com/arifszn/reforge.git
  cd reforge
  ```

- Install dependencies.

  ```shell
  npm install
  ```

- Run dev server.

  ```shell
  npm run dev
  ```

- Finally, visit [`http://localhost:5173`](http://localhost:5173) from your browser. Credentials can be found above.

## Config

Settings including app name, theme color, meta tags, etc. can be controlled from one single file **`config.ts`** located at the project's root.

```ts
//config.ts
const CONFIG = {
  appName: 'Reforge',
  helpLink: 'https://github.com/arifszn/reforge',
  enablePWA: true,
  theme: {
    accentColor: '#818cf8',
    sidebarLayout: 'mix',
    showBreadcrumb: true,
  },
  metaTags: {
    title: 'Reforge',
    description:
      'An out-of-box UI solution for enterprise applications as a React boilerplate.',
    imageURL: 'logo.svg',
  },
};

export default CONFIG;
```

## Support

<p>You can show your support by starring this project. ★</p>
<a href="https://github.com/arifszn/reforge/stargazers">
  <img src="https://img.shields.io/github/stars/arifszn/reforge?style=social" alt="Github Star">
</a>

## Contribute

To contribute, see the [Contributing guide](https://github.com/arifszn/reforge/blob/main/CONTRIBUTING.md).

## License

[MIT](https://github.com/arifszn/reforge/blob/main/LICENSE)
