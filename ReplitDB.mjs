// import syntax
import Database from '@replit/database';



export default class ReplitDB extends Database {

    constructor(){
        super()

        /** 
        @property
            this.identifier references a property's value temporarily 
            as it cannot be passed into a promise. Within the 
            promise the identifier value can be referred to and used 
            as needed.
        */
        this.identifier = null;
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
        this.identifier = {key: objKey, value: identifier};
        const object = await this.getRecord(dbkey)
            .then(array => {
                let index = 0;
                const obj = array.forEach( object => {
                    if(object[this.identifier.key] == this.identifier.value){
                        return;
                    }
                    index++;
                })

                return array[index]
            })
            .catch(e => console.log('Error:', e))
        return object;
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
        // Reset this.identifier to an empty string
        this.identifier = null;
    }
  
}
