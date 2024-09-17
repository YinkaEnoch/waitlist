import { Database } from "bun:sqlite";

export const DB = new Database("./db/waitlist.sqlite", { create: true });

export const CreateWaitListTable = () => {
  DB.query(
    `CREATE TABLE IF NOT EXISTS 'waitlist' (
      'id' integer not null primary key autoincrement,
      'email' text not null unique,
      'created_at' datetime default CURRENT_TIMESTAMP
    )`,
  ).run();
};

export const SaveEmail = (email) => {
  DB.query(`INSERT INTO waitlist (email) VALUES ($1)`).run(email);
};

export const GetEmail = (email) => {
  return DB.query("SELECT * FROM waitlist WHERE email=$1").get(email);
};

export const GetAllEmails = async (page, offset) => {};
