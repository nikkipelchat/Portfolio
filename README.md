# Portfolio

Code for my personal portfolio website, currently hosted by github pages [here](https://nikkipelchat.github.io/Portfolio/). This web app is build using Vue 3, Vite, and Tailwind.

## Requirements for Setup

[VSCode](https://code.visualstudio.com/)
[Node (works with v18.17.0)](https://nodejs.org/en/download)

## Project Commands

``` bash
# install dependencies
npm install
# compile and hot reload for development at localhost::3000
npm run dev

# build for production with minification
npm run build

# run eslint
npm run lint
# run eslint and autofix any issues that arise
npm run fix-lint
```

## Deploying

Every time you run `npm run build` the generated static files are outputted into `/docs` directory.
GitHub Pages is set up to deployed from the `/docs` folder and is automatically set off when you merge
changes to the `/docs` folder into the `main` branch. All you need to do is `npm run build` before creating
your PR and when you merge it into `main` it will deploy.
