
# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run build
npm run test:e2e # or `npm run test:e2e:ci` for headless testing
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

my_project

npm install 
npm run dev

Project deploy on firebase at (https://todolist-9aa3e.firebaseapp.com/)
For the Ci only npm build was made, the test part will come soon with the Unit test part.
CI triggered on push action on develop branch, and CD on merge on master.

For the technologie choice, i don't make backend parts cause i don't know how to make an API, we haven't seen that in course yet. I haven't do CSS cause i've prefered priorize practicing things we saw in course (versionning, CI, CD).

For the versionning i do my feature un branch from develop, i push on repo, merge on develop and when i'm satisfy or i achieve a purpose i merge develop on master for deployement.

