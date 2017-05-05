
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

 ### Gulp
 ```bash
 npm install gulp require-dir gulp-html-replace git-rev gulp-filter gulp-run gulp-filesize --save-dev
 npm install run-sequence --save-dev
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
 ./jspm install npm:react-progress-button
 ```

 TODO: https://github.com/airbnb/react-sketchapp

 ## Samsara

 ```bash
 ./jspm install samsara=github:rnprojekt/samsara@master
 ./jspm install npm:colors.css --dev
 ./jspm install underscore
 ./jspm install fastclick=github:ftlabs/fastclick
 ./jspm install device.js=github:matthewhudson/device.js
 ```

 ## Semantic UI
 ```bash
 ./jspm install npm:semantic-ui-react
 ./jspm install npm:semantic-ui
 ```

 ## OnsenUI
 ```bash
 ./jspm install npm:onsenui
 ./jspm install npm:react-onsenui
 ```

 ## Electron App
 https://electron.atom.io/docs/tutorial/quick-start/
 ```bash
 npm install electron
 ```

 ## React Desktop
 ```bash
  ./jspm install npm:react-desktop
 ```

 ## Monaca
 [https://onsen.io/v2/docs/guide/react/#starting-project](https://onsen.io/v2/docs/guide/react/#starting-project)

 ## i18n
 https://github.com/i18next/react-i18next/tree/master/example/webpack1
 ```bash
 ./jspm install npm:react-i18next npm:i18next-xhr-backend npm:i18next-browser-languagedetector
 ```
