// require syntax
const Database = require('@replit/database')
const db = new Database()



module.exports = class ReplitDB extends Database {

  constructor(){
    super()
    this.temp = null;
    
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
      /*
            @todo fix this
      */
    this.property = property;
    this.get(dbkey)
      .then( (obj) => {
        console.log(`${dbkey}.${db[property]} contains:`, 
                    obj[property]);
        return obj[property];
      })
      .then( (property) => {
        // Add Code Here
      });
    this.reset();
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
    // Reset db.property to an empty string
    this.temp = null;
  }
  
}
