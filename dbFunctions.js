// For ES6 Projects

// Import & Declare replit Database
import Database from '@replit/database';
const db = new Database();

const dbfn = {
  
  list: () =>{
    db.list()
      .then(keys => {
        keys.forEach( (dbkey) => {
          console.log(dbkey);
        });
      });
  }, 
  
  logRecord: (dbkey) => {
    db.get(dbkey)
      .then( (value) => {
        console.log(`\n${dbkey} contains: \n`, value);
      });
  },

  logProperty: (dbkey) => {
    db.get(dbkey)
      .then( (value) => {
        console.log(`${dbkey}.property contains:`, value);
      });
  },
  
  deleteRecord: (dbkey) => {
    db.delete(dbkey)
      .then( () => {
        console.log(`deleted ${dbkey}`)
      });
  },

  deleteAll: () => {
    db.list().then( (dbkeys) => {
      dbkeys.forEach( (key) => {
        db.delete(key);
      });
      console.log("All db records deleted");
    });
  },
  
  setRecord: (dbkey, data) => {
    db.set(dbkey, data)
      .then(() => {
        console.log(`${dbkey} data logged.`);
      })
  }
}

export {dbfn};
