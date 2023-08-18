// require syntax
const dotenv = require('dotenv')
const Database = require('@replit/database')
<<<<<<< HEAD
const db = new Database()

=======
// const db = new Database()
/** Use this declaration when working locally on Replit Database */
const db = new Database(process.env.REPLITDB)
>>>>>>> ccd07c238b6682785216ce4fd3abd09dec77478e

console.log('shell script test')

class ReplitDB extends Database {

  constructor(){
    super()
    this.temp = null;
    
  }

  list(){
    this.list()
      .then( (keys) => {
        keys.forEach( (dbkey) => {
          console.log(dbkey);
        });
        return keys;
      })
      .then( (keys) => {
        // Add Code Here
        
      });
  }
  
    logAllRecords(){
        this.list()
          .then( (keys) => {
              keys.forEach( dbkey => {
                  this.logRecord(dbkey);
              } );
          });
    }
  
  logRecord(dbkey){
    this.get(dbkey)
      .then( (value) => {
        console.log(`\n${dbkey} contains: \n`, value);
        return value;
      })
      .then( (value) => {
        // Add Code Here
      });;
  }
  
  logProperty(dbkey, property){
    this.property = property;
    this.get(dbkey)
      .then( (obj) => {
        console.log(`${dbkey}.${dbfn.property} contains:`, 
                    obj[dbfn.property]);
        return obj[dbfn.property];
      })
      .then( (property) => {
        // Add Code Here
      });
    dbfn.reset();
  }
    
  deleteRecord(dbkey){
    this.delete(dbkey)
      .then( () => {
        console.log(`deleted ${dbkey}`)
        return true;
      }).then( (success) => {
        // Add Code Here
      });
  }

  deleteAll(){
    this.list()
      .then( (dbkeys) => {
        dbkeys.forEach( (key) => {
          this.delete(key);
        });
        console.log("All db records deleted");
        return true;
      })
      .then( (success) => {
        // Add Code Here
      });
  }

  getRecord(dbkey){
    return this.get(dbkey);
  }
            
  setRecord(dbkey, data){
    this.set(dbkey, data)
      .then( () => {
        console.log(`${dbkey} data logged.`);
        return true;
      })
      .then( (success) => {
        // Add Code Here
      });
  }

  reset(){
    // Reset dbfn.property to an empty string
    this.temp = null;
  }
  
}



module.exports = ReplitDB;
