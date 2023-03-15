<br/>

<p align="center">
  
  <h1 align="center">
    <img src="https://user-images.githubusercontent.com/45073703/225269899-d0d3b91c-b09b-4835-ac78-c0e0be4632fe.png" width="20%">
  </h1>
  <h4 align="center">Ultimate toolkit for building enterprise frontend with React, Tailwind and Ant Design.</h4>

  <p align="center">
    <a href="https://reforge.netlify.app"><b>Demo</b></a>
    ·
    <a href="https://github.com/arifszn/reforge/issues"><b>Report Bug</b></a>
    ·
    <a href="https://github.com/arifszn/reforge/discussions"><b>Request Feature</b></a>
  </p>
</p>

## Features

- Elegant and customizable UI using `Tailwindcss` and `Ant Design`.
- Single page application using `React Router`.
- Mock API request using `reqres`.
- Powerful layout and table using `@ant-design/pro-components`.
- Code splitting using `@loadable/component`.
- State management using `react-redux` and `@reduxjs/toolkit`.
- Persistent redux state using `redux-persist`.
- Loading progress bar using `nprogress`.
- `ESLint` and `Prettier` enabled.

## Demo

https://reforge.netlify.app

### Credentials

- **Email:** `eve.holt@reqres.in`
- **Password:** `password`

## Usage

- "Star" this project.

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
  theme: {
    accentColor: '#30BEB8',
  },
};

export default CONFIG;
```

## License

[MIT](https://github.com/arifszn/reforge/blob/main/LICENSE)
