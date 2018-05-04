# Microservice Boilerplate

## What's In This

- [x] express
- [x] cookie parser
- [ ] body parser
- [ ] helmet for http header security
- [ ] cors for cross-origin-resource-sharing
- [ ] prometheus metrics monitoring
- [ ] zipkin distributed tracing
- [ ] swagger tooling
- [ ] graphql tooling

## Usage

Install it to a new project:

```sh
npm i @govtechsg/microservice-boilerplate --save;
# or
yarn add @govtechsg/microservice-boilerplate;
```

Use it in the project:

```js
const server = require('@govtechsg/microservice-boilerplate');
// this returns a provisioned instance of an express server with standardised behaviour
```

## Developing

### Releasing the Package
Run `npm run release` locally, commit the changes made by the script and push to GitHub.