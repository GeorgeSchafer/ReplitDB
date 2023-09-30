// Run with mocha $ test --exit
import {expect} from 'chai';
import ReplitDB from '../ReplitDB.cjs';


const anon = new Promise((resolveOuter) => {resolveOuter()})
                         
describe('ReplitDB.mjs', () => {

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

            expect(record).to.eql({v: 'Vendetta'})
            expect(record.v).to.equal('Vendetta')
            expect(tables[0]).to.equal(key)
            return anon;
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