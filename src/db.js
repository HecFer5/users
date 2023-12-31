import { createPool } from "mysql2/promise";
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_PORT, DB_USER } from "./config.js";

export const pool = createPool({
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
  database: DB_NAME,
});
