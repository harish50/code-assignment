# Code Assignment

This project requires nodejs installed for running the app locally. If you have docker installed you can run the following commands to see the output.

### Using docker

- Install docker [here](https://docs.docker.com/engine/install/)
- Run the following commands

```shell
docker build -t code-assignment .
docker run code-assignment
```

### Running locally

- [Install nodejs](https://nodejs.org/en/download/package-manager)
- Run `npm install`
- To see the even todos output run `make run-app`
- To run tests run `make run-tests` or `npm run test`