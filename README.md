# DevBrewerApi

<a href="#" ><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## Description

It's an api to provide data to Brewery software tools

## How to create a mongo container to DevBrewerApi

1. Make sure you have [Docker](https://www.docker.com/get-started) and [Docker Compose](https://docs.docker.com/compose/) installed.
2. Rename `.env.sample` file to `.env` only. Then if you want, change the variables values to your needs.
3. If it's the first time you run this container you'll need to run:

  ```bash
  #create netework first 
  ./create-network.sh 

  ```

4. To start the container.

  ```bash
  #start container
  ./db-up.sh
  ```

5. To stop the container.

  ```bash
  #stop container
  ./db-down.sh
  ```

## Installation

```bash
#install dependencies
$ yarn
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod

```

### - Now you can go to localhost:3000/v1/api and check the open api documentation and playground.

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Seeding initial data

Modules may have a seed command avaliable, to check it, go in the module folder and look for a file named "module name".seed.ts, then search for @Command decorator property named 'command' eg.:

```javascript
// src/modules/fermentable/grain/grain.seed.ts
@Command({
command: 'seed:fermentables', ...}

```

and run the script with the value of the command like this:

```bash
yarn run:command seed:fermentables
```

## Support

## Stay in touch

- Author - [Marcio Tiene](https://github.com/Marcio-Tiene)
- App - [https://tobedefined.com]()
- Instagram - [@tobedefined]()

## License

This project is [MIT licensed](LICENSE).
