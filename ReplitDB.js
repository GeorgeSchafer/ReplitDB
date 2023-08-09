// Import & Declare Replit Database
import Database from '@replit/database';
const db = new Database();

// const db = require('@replit/database');

class ReplitDBFunctions {

  constructor(){
    
    this.temp = null;
    
  }

  list(){
    db.list()
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
        db.list()
          .then( (keys) => {
              keys.forEach( dbkey => {
                  this.logRecord(dbkey);
              } );
          });
    }
  
  logRecord(dbkey){
    db.get(dbkey)
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
    db.get(dbkey)
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
    db.delete(dbkey)
      .then( () => {
        console.log(`deleted ${dbkey}`)
        return true;
      }).then( (success) => {
        // Add Code Here
      });
  }

  deleteAll(){
    db.list()
      .then( (dbkeys) => {
        dbkeys.forEach( (key) => {
          db.delete(key);
        });
        console.log("All db records deleted");
        return true;
      })
      .then( (success) => {
        // Add Code Here
      });
  }

  getRecord(dbkey){
    return db.get(dbkey);
  }
            
  setRecord(dbkey, data){
    db.set(dbkey, data)
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

export {ReplitDBFunctions as default};
