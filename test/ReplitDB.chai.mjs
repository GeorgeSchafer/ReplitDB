// Run with 
// $ mocha test --exit

import {expect} from 'chai';
import ReplitDB from '../ReplitDB.mjs';



const promise = new Promise((resolve) => {resolve()})
let count = 1;

describe('ReplitDB.mjs', () => {

    describe('Constructor', () => {
        
        it(`Test ${count}: Replitdb.identifier should return null`, 
            () => {
                const db = new ReplitDB()
                expect(db.identifier).to.eql(null)
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
                
                expect(record.v).to.eql('Vendetta')
                expect(tables[0]).to.equal('movies')
                
                return await promise;
            }
        )
        count++;

        it(`Test ${count}: ReplitDB.deleteRecord(key)`, 
            async () => {
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
                const key = new String('images')
                const value = { a: 'Avedon' }
                let string = new String()

                await db.setRecord(key, value)
                string = await db.toString(key)

                expect(string).to.equal('{"a":"Avedon"}')

                return await promise;
            }
        )
        count++;

        it(`Test ${count}: getObjectFromArray()`, 
            async () => {
                let obj;
                const potter = [
                    {
                        movie: 'and the Philosopher Stone', 
                        number: 1
                    },
                    {
                        movie: 'and the Chamber of Secrets',
                        number: 2
                    }
                ]
                
                await db.deleteAll()
                await db.setRecord('movies', potter)
                
                obj = await db.getObjectFromArray('movies', 'number', potter[1].number)
                Object.entries(obj).forEach(key => {
                    expect(obj[key]).to.eql(potter[1][key])
                })
                
                return await promise;
            })
        count++;
    })
})




/** 
describe('Descriptions', () => {
    describe('Test Description', () => {
        it(`Test ${count}: Component Description`, 
            async () => {
                // Expectation
                const db = new ReplitDB()
            }
        )
        count++;
    })
})
*/