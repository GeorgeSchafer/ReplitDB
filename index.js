import { ReplitDB } from './ReplitDB/ReplitDB.cjs';
const dbfn = new ReplitDB();

console.log('Welcome, check out the readme for tips.');

dbfn.setRecord('key', {property: 'value'});
dbfn.logRecord('key');
dbfn.logProperty('key', 'property');
