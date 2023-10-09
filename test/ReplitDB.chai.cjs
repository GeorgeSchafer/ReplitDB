// Run with 
// $ mocha test --exit

const expect = require('chai').expect;
const ReplitDB = require('../ReplitDB.cjs')



const promise = new Promise((resolve) => {resolve()})
let count = 1;

describe('ReplitDB.cjs', () => {

    describe('Constructor', () => {
        const db = new ReplitDB()
        
        it(`Test ${count}: ReplitDB.temp should return null`, 
            () => {
                expect(db.temp).to.eql(null)
            }
        )
        
        count++;
    })

    describe('Class Methods', async () => {
        const db = new ReplitDB()

        it(`Test ${count}: ReplitDB.setRecord(key,property), .getRecord(key)`, 
            async () => {
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
            })
        count++;

        it(`Test ${count}: ReplitDB.deleteRecord(key)`, 
            async () => {
                let success1 = false;
                
                await db.setRecord('books', {b: 'Berzerk'})
                success1 = await db.deleteRecord('books')

                expect(success1).to.be.true;
                
                return await promise;
        })
        count++;

        it(`Test ${count}: ReplitDB.deleteAll()`, 
            async () => {
                let success2;

                await db.setRecord('music', {t: 'Tool'})
                success2 = await db.deleteAll()
                
                expect(success2).to.equal(true)
                
                return await promise;
            })
        count++;
        
        it(`Test ${count}: ReplitDB.toString(key)`, 
            async () => {
                const key = new String('images')
                const value = { a: 'Avedon' }
                let string = new String()

                await db.setRecord(key, value)
                string = await db.toString(key)

                expect(string).to.equal('{"a":"Avedon"}')

                return await promise;
            })
        count++;

        // it(`Test ${count}: getObjectFromArray()`, 
        //     async () => {
        //         // const db = new ReplitDB()
        //         let result;
        //         const potter = {
        //             movie: 'Harry Potter and the Philosopher Stone', 
        //             number: 1
        //         }
                
        //         await db.deleteAll()
        //         await db.setRecord('movies', [potter])
                
        //         result = await db.getObjectFromArray('movies', 'number', potter.number)
                
        //         expect(result).to.eql(potter)
        //     })
        // count++;
    })
})




/** 
describe('Descriptions', () => {
  describe('Test Description', () => {
    it(`Test ${count}: Component Description`, 
        async () => {
            // Expectation
        })
    count++;
  })
})
*/