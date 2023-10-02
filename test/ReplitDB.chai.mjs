// Run with 
// $ mocha test --exit

import {expect} from 'chai';
import ReplitDB from '../ReplitDB.mjs';



const promise = new Promise((resolve) => {resolve()})

describe('ReplitDB.mjs', () => {

    describe('Constructor', () => {
        it('Temp should return null', 
            () => {
                const db = new ReplitDB()
                expect(db.temp).to.eql(null)
            })
    })

    describe('Class methods', async () => {

        it('.setRecord(key,property), .getRecord(key)', 
            async () => {
                const db = new ReplitDB()
                let key = 'movies';
                let property = { v: 'Vendetta' }
                let record, tables;
                
                await db.setRecord(key, property)
                record = await db.getRecord(key)
                tables = await db.list()
                
                expect(record).to.eql({ v: 'Vendetta' })
                expect(record.v).to.equal('Vendetta')
                expect(tables[0]).to.equal('movies')
                
                return await promise;
        })

        it('.deleteRecord(key)', 
            async () => {
                // Expectation
                const db = new ReplitDB()
                let success1 = false;
                
                await db.setRecord('books', {b: 'Berzerk'})
                success1 = await db.deleteRecord('books')

                expect(success1).to.be.true;
                
                return await promise;
        })

        it('.deleteAll()', 
            async () => {
                // Expectation
                const db = new ReplitDB()
                let success2;

                await db.setRecord('music', {t: 'Tool'})
                success2 = await db.deleteAll()
                
                expect(success2).to.equal(true)
                
                return await promise;
            })
    })
})




/** 
describe('Descriptions', () => {
  describe('Parameter Description', () => {
    it('Test summary', 
        () => {
            // Expectation
    });
  });
});
*/