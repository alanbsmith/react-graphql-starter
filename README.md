# React + GraphQL Starter
_for [Heroku](https://www.heroku.com/) deployment_

## 🚨 NOTE 🚨
_This is currently a WIP starter and isn't ready yet. I'm pushing up bits as I add new functionality. I'll bump the version to 1.0.0 when it's ready._ 🎉

## OVERVIEW
This is a simple starter to get you up and running for React + GraphQL projects. The DB is stubbed with 'Todo list' data as a placeholder. Feel free to edit or remove this as needed.

This starter is intended to provide:

* a lightweight Webpack config (for development and production)
* some helpful tooling for development workflow
* initial setup with PostgreSQL
* Heroku-ready deployment setup

### Tech Stack
This is intentionally minimalist. I feel like it's a better pattern for you to add what you want to a starter instead of dismantling cruft you don't want or need.

* PostgreSQL / Knex (DB layer)
* Node / Express (Server layer)
* Nodemon (to auto-restart the server)
* GraphQL / Express GraphQL (API layer)
* ReactJS (Client layer)

## UP & RUNNING
### Install Dependencies
```
$ npm install
```
_or_
```
$ yarn
```

### Database Setup
_**NOTE:** This assumes you have the Knex CLI installed. If not, first run:_
```
$ npm install -g knex
```

#### Creating your Database
Change the database name on line 7 of `knexfile.js` from `react-graphql-starter` to whatever you'd like. Then in your terminal run:
```
$ createdb your-db-name
```

You'll also need to create a `.env` file at the root of your project and add a username and password for your database. This file is already added to the `.gitignore`. You can follow the example in `.env.sample` to see how to set it up.

```
$ touch .env
```

```
//.env
DB_USER="your-username"
DB_PASSWORD="your-secret-password"
```

#### Updating Migrations
Currently, there is a single migration file in `db/migrations` for creating Todos. You're welcome to change it to whatever you'd like by running:
```
$ knex migrate:make your-migration-name
```

To run the migrations:
```
knex migrate:latest
```

#### Using Seeds
Currently, there is a single seed file in `seeds/todos` to generate some initial data. You're welcome to change it to whatever you'd like by running:
```
$ knex seed:make your-seed-file-name
```

To run the seed file:
```
$ knex seed:run
```

### Fire Up Your Server
```
$ npm start
```

You can view the GraphiQL UI at `http://localhost:8080/graphql`.

If you'd like more information on using `express-graphql`, you can find great docs [here](http://graphql.org/graphql-js/running-an-express-graphql-server/) and [here](https://github.com/graphql/express-graphql).

#### GraphiQL Example Requests
**FETCH TODOS**
```
{
  fetchTodos {
    id
    text
    complete
  }
}
```

**FETCH TODO**
```
{
  fetchTodo(id: 1) {
    id
    text
    complete
  }
}
```

**CREATE TODO**
```
mutation {
  createTodo(input: {
    text: "get groceries",
  }) {
    id
    text
    complete
  }
}
```

**UPDATE TODO**
```
mutation {
  updateTodo(input: {
    id: 2
    text: "get paint for the bedroom"
  }) {
    id
    text
    complete
  }
}
```

**DESTROY TODO**
```
mutation {
  destroyTodo(id: 4) {
    id
  }
}
```

**Note:** _This is only setup for development at the moment. Nodemon is set to restart the server and GraphiQL UI is running by default._
