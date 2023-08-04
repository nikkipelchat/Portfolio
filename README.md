# Portfolio

Code for my personal portfolio website, currently hosted by github pages [here](https://nikkipelchat.github.io/Portfolio/). This web app is build using Vue 3, Vite and tailwind.

## Requirements for Setup

[VSCode](https://code.visualstudio.com/)
[Node (works with v18.17.0)](https://nodejs.org/en/download)

## Project Setup

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

```bash
# start on main branch
npm run build
# need -f because dist is in .gitignore
git add dist -f
# add a message
git commit -m "Update deploy"
# makes gh pages a subtree of our main branch
# gh-pages branch will be the root of our dist folder only
git subtree push --prefix dist origin gh-pages
```
