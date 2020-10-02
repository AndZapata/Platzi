"use strict";

const { MongoClient } = require("mongodb");

const { DB_PASSWD, DB_NAME, DB_USER, DB_HOST } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

let connection;

const connectDB = async () => {
  const client = new MongoClient(uri, { useUnifiedTopology: true });

  connection = await client.connect();

  return connection;
};

module.exports = connectDB;
