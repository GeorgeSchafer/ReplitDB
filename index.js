import {dbfn} from './dbFunctions.js';

console.log('Welcome, check out the readme for tips.');

dbfn.setRecord('key', {field: 'value'});
dbfn.logRecord('key');

dbfn.deleteAll();