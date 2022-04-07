# Running the node app
- Assumption: you have installed the docker image `node:lts-bullseye`
- Go into the node-app dir: `cd node-app`
- Now, build the Dockerfile to an Image called cooper/node-runner via `docker build . -t cooper/node-runner`
- Great, we have a docker image, we can run it in a container, using
`docker run -it -p 3000:3000 --name nodemon-container -v "$PWD":/usr/src/app -w /usr/src/app cooper/node-runner`
- Boom! Now, this docker container `nodemon-container`, whenever it runs, will create a server available on the internet at port 3000
- If you change the files (locally or not) the server re-runs
- Use `docker stop nodemon-container` to stop it, and `docker start nodemon-container` to start again

# Running code-server 
- Assumption: you have installed the docker image `codercom/code-server`
- Go into node-app directory again
- You can now create a container with this command: `docker run -it --name codeserver -p 8080:8080 -v "$PWD:/home/coder/project" -u "$(id -u):$(id -g)" codercom/code-server:latest`
- This container creates a code server accessible from the itnernet at 8080
- You'll have to get its password `docker exec -it codeserver /bin/bash` and then `cat ~/.config/code-server-/config/yaml`

WOhoo!! Now you can edit using codeserver and the other server updates :)

# TODO
[] Write our own docker file that rewrites the password in config.yaml to be a constant.
[] Add these docker images at build time / run them each startup time
