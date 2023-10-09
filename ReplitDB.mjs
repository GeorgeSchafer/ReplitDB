// import syntax
import Database from '@replit/database';



export default class ReplitDB extends Database {

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

    async getObjectFromArray(dbkey, objKey, identifier){
        db.temp = {key: objKey, value: identifier};
        const object = await this.getRecord(dbkey)
            .then( data => data.json() )
            .then( array => {
                array.forEach( object => {
                    if(object[db.temp.key] == db.temp.value){
                        return object;
                    }
                })
            } )
    }
    
    async deleteRecord(dbkey){
        return await this.delete(dbkey)
            .then( () => {
                // Add Code Here
                return true;
            })
            .catch( (e) => {
                console.log(e)
                return false;
            })        
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
        
        return '' + value
        
    }

    async logRecord(dbkey){
        await this.get(dbkey)
            .then( (value) => {
                return {key: dbkey, value: value};
            })
            .then( (data) => {
                // Add Code Here
                console.log(data.key + ':', data.value)
            })
            .catch(e => console.log(e))
    }
  
    async logAllRecords(){
        await this.list()
            .then( dbkeys => {
              dbkeys.forEach( dbkey => {
                  this.logRecord(dbkey)
              } )
            })
            .catch( (e) => {
                console.log(e)
            } )
    }

    reset(){
        // Reset this.temp to an empty string
        this.temp = null;
    }
  
}
