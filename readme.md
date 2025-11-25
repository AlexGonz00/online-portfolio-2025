# Portfolio Website

This is a website for my portfolio. This is to showcase my past work mainly related to VR, game development, and general software projects. This website aims to build on top of my [previous portfolio](https://github.com/AlexGonz00/online-portfolio), with a focus on responsive design.

## Features

- Responsive design
- Full height header/hero
- Background image overlays
- Font awesome icons
- Profile
- Project page
- Modals for video content

## Usage

This website is built with [Bootstrap](https://getbootstrap.com/) and [Sass](https://sass-lang.com/). It uses [Font Awesome](https://fontawesome.com/) for icons.

To customize this website, you need to install [Node.js](https://nodejs.org/en/). Then, clone this repository and run:

```bash
npm install
```

This will install Bootstrap, Sass and Font Awesome. To build your CSS files from Sass, run:

```bash
npm run sass:build
```

To watch your Sass files for changes, run:

```bash
npm run sass:watch
```

You can add Bootstrap variables to the `bootstrap.scss` file. You can look at the file `node_modules/bootstrap/dist/scss/_variables.scss` for a list of all the variables. Do NOT edit the `variables.scss` file directly, as it will be overwritten when you update Bootstrap.

To add your own custom styles, use the `styles.scss` file.
