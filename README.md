# iSQL - Using Angular and Node.js

Please make sure to run `npm install` in both directories to install all needed dependencies.

## Client

The client is written in TypeScript using Angular 5. It is styled with Material Design.

In order to run the client, please install [Angular CLI](https://github.com/angular/angular-cli) and type the folowing command in the terminal:

```
cd client; ng serve
```

Then navigate to `http://localhost:4200`

## Server

Before running the server, you need a MySQL-database set up and change the connection-parameters accordingly in server.ts.
In case you don't have the typescript compiler installed, please run `npm install -g tsc`.

Run the server with the following command and watch out for the log `Database is connected ...`

```
npm start
```
