

## Project Setup

    npm install

### Compile and Hot-Reload for Development

    npm run dev

### Compile and Minify for Production

    npm run build

### Run Unit Tests with [Vitest](https://vitest.dev/)

    npm run test:unit
### Run Unit Test with coverage

    npm run test:coverage
and check in generate coverage file, open html file in browser.


Project deploy on firebase at (https://todolist-9aa3e.firebaseapp.com/)

For the Ci  npm build and test are run.
CI triggered on push action on develop branch, and CD on merge on master.

For the technologie choice, i don't make backend parts cause i don't know how to make an API, we haven't seen that in course yet. I haven't do CSS cause i've prefered priorize practicing things we saw in course (versionning, CI, CD).

For the versionning i do my feature un branch from develop, i push on my repository, merge on develop and when i'm satisfy or i achieve a purpose i merge develop on master for deployement.

