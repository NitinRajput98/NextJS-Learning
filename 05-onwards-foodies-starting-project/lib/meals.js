import sql from "better-sqlite3";

const db = sql("meals.db");

export default async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  // throw new Error("Data fetching falied.Try again!!!!!")
  return db.prepare("SELECT * from meals").all();
}
