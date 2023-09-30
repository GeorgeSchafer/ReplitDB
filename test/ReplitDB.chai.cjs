// Run with mocha test --exit

const expect = require('chai').expect;

const ReplitDB = require('../ReplitDB.cjs');
const db = new ReplitDB()

console.log('Welcome, check out the readme for tips.');
db.deleteAll()

describe('ReplitDB.cjs', () => {

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
            const tables = await db.list();

            setTimeout( () => {} , 5000)
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