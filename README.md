<!-- prettier-ignore -->
# r-admin [![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
> react admin panel powered by CoreUI v1.0.10 

## Intro 

It uses Sass (with .scss). The style is loaded at the component level.

## Features

## Usage
```sh
# install dependencies
yarn
```

## Yarn Script Commands

| `Yarn run <script>`  | Description                                             |
| -------------------- | ------------------------------------------------------- |
| `yarn start`         | for developing (it runs webpack-dev-server)             |
| `yarn build`         | to run a dev build                                      |
| `yarn clean`         | to clean build dir                                      |
| `yarn dev`           | to run a dev build with watching filesystem for changes |
| `yarn pretty`        | to run Prettier                                         |
| `yarn flow`          | to run Flow checker                                     |
| `yarn test           | to run jest/enzyme test                                 |
| `yarn test:watch`    | to run jest watching tests                              |
| `yarn test:coverage` | to run jest coverage                                    |

## App Structure

```
.
├── flow-typed/**                 # external lib types             
├── node_modules/**               # node_modules
├── public                        # public source
|   ├── img                       # images
|   |    └── avatars              # avatars
|   ├── favicon.ico               # favicon
|   └── index.html                # index.html
├── scss                          # scss source
|   ├── core/**                   # core styles
|   ├── vendors/**                # vendor styles
|   ├── _bootstrap-variables.scss # bootstrap overrides
|   ├── _core-variables.scss      # core overrides
|   ├── _custom.scss              # other styles
|   └── style.scss                # main style
├── src                           # app source code (js|jsx source)
|   ├── components                # reusable components (including styled/scss/testing files)
|   ├── config                    # app configuration settings
|   |   └── default.js            # default settings
|   ├── containers                # container components (including styled/scss/testing files)
|   ├── views                     # views
|   └── index.js                  # app entry point
├── tests                         # tests
|   ├── __snapshots__             # enzyme snapshots
|   └── jetssetup.js              # jest-enzyme setup settings
├── .babelrc                      # babel settings
├── .flowconfig                   # flow settings
├── .gitignore                    # git ignore settings
├── .npmrc                        # npm settings
├── .prettierignore               # prettier ignore path
├── .prettierrc                   # prettier rules
├── LICENSE                       # license file
├── package.json                  # package.json
├── README.md                     # README file
├── webpack.config.js             # webpack settings
└── yarn.lock                     # yarn lock file
```

## Used by

* [prettier](https://github.com/prettier/prettier)
* [husky](https://github.com/typicode/husky)
* [lint-staged](https://github.com/okonet/lint-staged)
* [flow](https://flow.org)
* [styled-components](https://github.com/styled-components/styled-components)
* [jest](https://facebook.github.io/jest/)
* [enzyme](https://github.com/airbnb/enzyme)
* ... and little more

## See Also
[CoreUI - Free Bootstrap Admin Template](https://github.com/mrholek/CoreUI-React)

## Todo...

* [x] Change 💩npm to yarn.
* [x] Add prettier/hasky/lint-staged.
* [x] Add flow.
* [x] Add styled-components.
* [x] Add jest/enzyme.
* [ ] Add authorization.

## License

:cactus: MIT :cactus: