const Sequelize = require("sequelize");
const pkg = require("../../package.json");
require("dotenv").config();

const databaseName =
  pkg.name + (process.env.NODE_ENV === "test" ? "-test" : "");

const renderDatabase =
  "postgres://sante_enik_user:4QVCsfjkOVLjdwTxCGvqQl1lA2BEt3j9@dpg-cdtrjr02i3mrfohqdtl0-a.ohio-postgres.render.com/sante_enik";

const config = {
  logging: false,
};

if (process.env.LOGGING === "true") {
  delete config.logging;
}

//https://stackoverflow.com/questions/61254851/heroku-postgres-sequelize-no-pg-hba-conf-entry-for-host
if (process.env.DATABASE_URL) {
  config.dialectOptions = {
    ssl: {
      rejectUnauthorized: false,
    },
  };
}

console.log(renderDatabase);

const db = new Sequelize(
  renderDatabase || `postgres://localhost:5432/${databaseName}`,
  config
);
module.exports = db;
