// require syntax
const Database = require('@replit/database')



module.exports = class ReplitDB extends Database {

    constructor(){
        super()
        /** 
        @property
            this.temp references a property's value temporarily 
            as it cannot be passed into a promise. Within the 
            promise the temp value can be referred to and used 
            as needed.
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
                return success;
            })
            .catch( (e) => {
                console.log(e)
            } )
    }

    async getRecord(dbkey){
        return await this.get(dbkey)
            .then(value => { return value })
            .catch(e => {
                console.log(e)
            })
    }
    
    async deleteRecord(dbkey){
        const result = await this.delete(dbkey)
            .then( () => {
                // Add Code Here
                return true;
            })
            .catch( (e) => {
                console.log(e)
                return false;
            })
        
        return result;
    }

    async deleteAll(){
        return await this.list()
            .then( (dbkeys) => {
                dbkeys.forEach( (key) => {
                    this.delete(key)
                })
                return true;
            })
            .catch( (e) => {
                console.log(e)
                return false;
            })
    }

    async toString(dbkey){
        let value = await this.get(dbkey)
            .then(value => {
                return value;
            })
            .catch(e => console.log(e))

        value = JSON.stringify(value)
        
        return `"${dbkey}":${value}`
        
    }
    
    // async toString(){
    //     const string = new String();

    //     await this.list()
    //         .then( keys => {
    //             keys.forEach( dbkey => {
    //                 string += await this.toString(key)
    //             })
    //         })
    //         .catch(e => console.log(e))

    //     return string;
    // }
  
    async logRecord(dbkey){
        await this.get(dbkey)
            .then( (value) => {
                return {key: dbkey, value: value};
            })
            .then( (value) => {
                // Add Code Here
            })
            .catch(e => console.log(e))
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

    reset(){
        // Reset this.temp to an empty string
        this.temp = null;
    }
  
}

