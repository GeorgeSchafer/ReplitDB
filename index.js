import {dbfn} from './dbFunctions.js';

console.log('Welcome, check out the readme for tips.');

dbfn.setRecord('key', {obj: {field: 'value'}});
dbfn.logRecord('key');
dbfn.logProperty('key', 'field');