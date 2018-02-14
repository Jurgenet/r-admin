# R-Admin
> react admin panel powered by CoreUI v1.0.10 

## Intro 

It uses Sass (with .scss). The style is loaded at the component level.

Dependencies can be handled by **npm**.

## Usage

**npm i** - to install dependencies

## NPM Script Commands

| `NPM run <script>` | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `npm start`        | for developing (it runs webpack-dev-server)             |
| `npm run build`    | to run a dev build                                      |
| `npm run clean`    | to clean build dir                                      |
| `npm run dev`      | to run a dev build with watching filesystem for changes |

## App Structure

```
.
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
└── src                           # app source code (js|jsx source)
    ├── components                # reusable components (including styled/scss/testing files)
    ├── config                    # app configuration settings
    |   └── default.js            # default settings
    ├── containers                # container components (including styled/scss/testing files)
    ├── views                     # views
    └── index.js                  # app entry point
```

## See Also
[CoreUI - Free Bootstrap Admin Template](https://github.com/mrholek/CoreUI-React)

## Todo...

* [ ] Add styled-components.
* [ ] Add flow.
* [ ] Add prettier.
* [ ] Add jest/ensyme.
* [ ] Add authorization.