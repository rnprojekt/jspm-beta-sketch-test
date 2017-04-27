
## Installation

[http://jspm.io/0.17-beta-guide/creating-a-project.html](http://jspm.io/0.17-beta-guide/creating-a-project.html)

```bash
npm init
npm install jspm@beta --save-dev
npm install docpress --save-dev
./jspm init .
./jspm install react react-dom
```

### Hot reloading
```bash
./jspm install --dev systemjs-hot-reloader
npm install chokidar-socket-emitter --save-dev
npm install http-server --save-dev
```

### JSX & CSS Syntax
```bash
./jspm install --dev npm:babel-plugin-transform-react-jsx core-js
./jspm install css=github:systemjs/plugin-css --dev
```

### Redux
```bash
./jspm install react-redux
./jspm install redux npm:redux-thunk
./jspm install react-router
```

## Running
```bash
./chokidar
./serv
```

## Building
```bash
./build-dist && ./serv-dist
```

## Grommet Components
[https://grommet.github.io/docs/get-started](https://grommet.github.io/docs/get-started)
```bash
./jspm install npm:grommet npm:grommet-addons
```

TODO: https://github.com/airbnb/react-sketchapp

## samsara

./jspm install samsara=github:rnprojekt/samsara@master
./jspm install npm:colors.css --dev
./jspm install underscore
