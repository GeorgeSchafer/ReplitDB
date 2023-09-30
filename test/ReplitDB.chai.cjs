// Run with mocha test --exit

const expect = require('chai').expect;

const ReplitDB = require('../ReplitDB.cjs')
const anon = () => {}

console.log('Welcome, check out the readme for tips.');

describe('ReplitDB.cjs', () => {

    describe('Constructor', () => {
        it('Temp should return null', () => {
            const db = new ReplitDB()
            expect(db.temp).to.eql(null)
        })
    })

    describe('Setters and Getters', async () => {    
        it('db.getRecord(key,value)', async () => {
            const db = new ReplitDB()
            let key = 'movies',
                property = { v: 'Vendetta' }
            await db.set(key, property)
            const record = await db.getRecord(key)
            const tables = await db.list()

            setTimeout(anon, 1000)
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