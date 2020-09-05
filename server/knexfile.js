// Update with your config settings.
const credentials = require("./config/db_config");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: credentials.host,
      user: credentials.user,
      password: credentials.password,
      database: credentials.database,
    },
    debug: true,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
