// For ES6 Projects

// Import & Declare replit Database
import Database from '@replit/database';
const db = new Database();

const dbfn = {
  
  list: () =>{
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
  }, 
  
  logRecord: (dbkey) => {
    db.get(dbkey)
      .then( (value) => {
        console.log(`\n${dbkey} contains: \n`, value);
        return value;
      })
      .then( (value) => {
        // Add Code Here
      });;
  },

  logProperty: (dbkey, property) => {
    dbfn.property = property;
    db.get(dbkey)
      .then( (obj) => {
        console.log(`${dbkey}.${dbfn.property} contains:`, 
                    obj[dbfn.property]);
        return obj[dbfn.property];
      })
      .then( (property) => {
        // Add Code Here
      });
    // Return dbfn.property to empty string
    dbfn.property = '';
  },
  
  deleteRecord: (dbkey) => {
    db.delete(dbkey)
      .then( () => {
        console.log(`deleted ${dbkey}`)
        return true;
      }).then( (success) => {
        // Add Code Here
      });
  },

  deleteAll: () => {
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
  },
  
  setRecord: (dbkey, data) => {
    db.set(dbkey, data)
      .then( () => {
        console.log(`${dbkey} data logged.`);
        return true;
      })
      .then( (success) => {
        // Add Code Here
      });
  },

  property: ''
}

export {dbfn};
