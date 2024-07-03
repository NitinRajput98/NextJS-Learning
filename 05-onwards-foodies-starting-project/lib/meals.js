import sql from "better-sqlite3"

const db = sql("meals.db")

export default async function getMeals(){
    new Promise((resolve)=>setTimeout(resolve,2000))
    return db.prepare("SELECT * from meals").all()
}