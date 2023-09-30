// Run with mocha test --exit

import {expect} from 'chai';
import ReplitDB from '../ReplitDB.cjs';

const db = new ReplitDB()
const anon = () => {}

console.log('Welcome, check out the readme for tips.');
db.deleteAll()

describe('ReplitDB.mjs', () => {

    describe('Constructor', () => {
        it('Temp should return null', () => {
            expect(db.temp).to.eql(null)
        })
    })

    describe('Setters and Getters', async () => {    
        it('db.getRecord(key,value)', async () => {
            let key = 'movies',
                property = { v: 'Vendetta' }
            await db.set(key, property)
            const record = await db.getRecord(key)
            const tables = await db.list()

            setTimeout(anon, 500)
            expect(record).to.eql({v: 'Vendetta'})
            expect(record.v).to.equal('Vendetta')
            expect(tables[0]).to.equal(key)
        })
    })
})




/** 
describe('Descriptions', () => {
  describe('Parameter Description', () => {
    it('Test summary', () => {
      // Expectation
    });
  });
});
*/