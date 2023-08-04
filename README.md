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

## Deployment Branch Setup (One-time)

``` bash
# using --orphan because the history of the main branch is not meaningful to deploy
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Init gh-pages branch"
git checkout main
# now mount the branch as a subdirectory
git worktree add dist gh-pages
```

# Deploying

Every time you run `npm run build` the generated static files are in `dist` directory.
Since `dist` folder is now `gh-pages` branch, you can deploy it directly by just creating a commit and pushing it.

``` bash
cd dist
git add --all
git commit -m "Deploy"
git push origin gh-pages
```

This way nothing was added to the `main` branch history, keeping it clean.
