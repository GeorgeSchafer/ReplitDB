// import syntax
import Database from '@replit/database';
const db = new Database()



export default class ReplitDB extends Database {

    constructor(){
        super()
        /** 
        @property
            this.temp references a key's value temporarily as it cannot 
            be passed into a promise. Within the promise the temp value
            can be referred to and used as needed.
        */
        this.temp = null;
    }

    async setRecord(dbkey, data){
        await this.set(dbkey, data)
            .then( () => {
                // console.log(`${dbkey} data logged.`)
                return true;
            })
            .then( (success) => {
            // Add Code Here
            })
            .catch( (e) => {
                console.log(e)
            } )
    }

    async getRecord(dbkey){
        return await this.get(dbkey)
    }
  
    async logAllRecords(){
        await this.list()
            .then( (keys) => {
              keys.forEach( dbkey => {
                  this.logRecord(dbkey)
              } )
            })
            .catch( (e) => {
                console.log(e)
            } )
    }
  
    async logRecord(dbkey){
        await this.get(dbkey)
            .then( (value) => {
                // console.log(`\n${dbkey} contains: \n`, value)
                return value;
            })
            .then( (value) => {
                // Add Code Here
            })
            .catch( (e) => {
                console.log(e)
            })
    }
  
  async logProperty(dbkeyStr, propertyStr){
    this.temp = propertyStr;

    await this.get(dbkeyStr)
        .then( (obj) => {
            // console.log(`${dbkeyStr} contains:`, obj
            return obj[this.temp];
        })
        .then( (propertyStr) => {
            // Add Code Here
        })
        .catch( (e) => {
            console.log(e)
        })
      
        this.reset()
    }
    
    async deleteRecord(dbkey){
        await this.delete(dbkey)
            .then( () => {
                // console.log(`deleted ${dbkey}`)
                return true;
            })
            .then( (success) => {
                // Add Code Here
            })
            .catch( (e) => {
                console.log(e)
            })
    }

    async deleteAll(){
        await this.list()
            .then( (dbkeys) => {
                dbkeys.forEach( (key) => {
                    this.delete(key)
                })
                // console.log("All db records deleted")
                return true;
            })
            .then( (success) => {
                // Add Code Here
            })
            .catch( (e) => {
                console.log(e)
            })
    }

    reset(){
        // Reset this.temp to an empty string
        this.temp = null;
    }
  
}

