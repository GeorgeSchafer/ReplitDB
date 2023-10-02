// Run with 
// $ mocha test --exit

import {expect} from 'chai';
import ReplitDB from '../ReplitDB.mjs';



const promise = new Promise((resolve) => {resolve()})
let count = 1;

describe('ReplitDB.mjs', () => {

    describe('Constructor', () => {
        it(`Test ${count}: ReplitDB.temp should return null`, 
            () => {
                const db = new ReplitDB()
                expect(db.temp).to.eql(null)
            }
        )
        
        count++;
    })

    describe('Class methods', async () => {

        it(`Test ${count}: ReplitDB.setRecord(key,property), .getRecord(key)`, 
            async () => {
                const db = new ReplitDB()
                let key = 'movies';
                let property = { v: 'Vendetta' }
                let record, tables;

                await db.deleteAll()
                await db.setRecord(key, property)
                record = await db.getRecord(key)
                tables = await db.list()
                
                expect(record).to.eql({ v: 'Vendetta' })
                expect(record.v).to.equal('Vendetta')
                expect(tables[0]).to.equal('movies')
                
                return await promise;
            }
        )
        count++;

        it(`Test ${count}: ReplitDB.deleteRecord(key)`, 
            async () => {
                // Expectation
                const db = new ReplitDB()
                let success1 = false;
                
                await db.setRecord('books', {b: 'Berzerk'})
                success1 = await db.deleteRecord('books')

                expect(success1).to.be.true;
                
                return await promise;
        }
        )
        count++;

        it(`Test ${count}: ReplitDB.deleteAll()`, 
            async () => {
                // Expectation
                const db = new ReplitDB()
                let success2;

                await db.setRecord('music', {t: 'Tool'})
                success2 = await db.deleteAll()
                
                expect(success2).to.equal(true)
                
                return await promise;
            }
        )
        count++;
        
        it(`Test ${count}: ReplitDB.toString(key)`, 
            async () => {
                // Expectation
                const db = new ReplitDB()
                const key = new String('images')
                const value = { a: 'Avedon' }
                let string = new String()

                await db.setRecord(key, value)
                string = await db.toString(key)

                expect(string).to.equal('"images":{"a":"Avedon"}')

                return await promise;
            }
        )
        count++;
    })
})




/** 
describe('Descriptions', () => {
  describe('Parameter Description', () => {
    it('Test summary', 
        () => {
            // Expectation
        }
    )
  })
})
*/