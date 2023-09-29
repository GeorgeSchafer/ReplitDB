
const ReplitDB = require('./ReplitDB.cjs');
const db = new ReplitDB()

console.log('Welcome, check out the readme for tips.');

db.setRecord('key', {property: 'value'});
db.logRecord('key');
db.logProperty('key', 'property');
