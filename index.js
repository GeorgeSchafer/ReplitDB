const ReplitDB = require('./ReplitDB.cjs');
const db = new ReplitDB();

const potter = [
    {title:"and the Philosopher Stone", number:1},
    {title:"and the Chamber of Secrets", number:2}
]

db.setRecord('movies', potter)
const movies = await db.getRecord('movies')
// const movie = await db.getObjectFromArray('movies','number',1)

console.log('movies: {', movies, '\n}')







    