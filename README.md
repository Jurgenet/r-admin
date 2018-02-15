# r-admin
> react admin panel powered by CoreUI v1.0.10 

## Intro 

It uses Sass (with .scss). The style is loaded at the component level.

## Usage

**yarn** - to install dependencies

## Yarn Script Commands

| `Yarn run <script>` | Description                                             |
| ------------------- | ------------------------------------------------------- |
| `yarn start`        | for developing (it runs webpack-dev-server)             |
| `yarn build`        | to run a dev build                                      |
| `yarn clean`        | to clean build dir                                      |
| `yarn dev`          | to run a dev build with watching filesystem for changes |
| `yarn pretty`       | to run Prettier                                         |

## App Structure

```
.
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
├── .babelrc                      # babel settings
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

## See Also
[CoreUI - Free Bootstrap Admin Template](https://github.com/mrholek/CoreUI-React)

## Todo...

* [x] Change 💩npm to yarn.
* [x] Add prettier/hasky/lint-staged.
* [ ] Add flow.
* [ ] Add styled-components.
* [ ] Add jest/ensyme.
* [ ] Add authorization.

## License

:cactus: MIT :cactus: