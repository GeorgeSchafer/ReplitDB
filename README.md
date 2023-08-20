[Replit](https://replit.com/@GeorgeSchafer/ReplitDB) project

[Github Repo](https://github.com/GeorgeSchafer/ReplitDB)

# Setup

## Import Replit database

There are two options for importing the Replit database. The ES6 option is not listed in the [Replit Database documentation](https://docs.replit.com/hosting/databases/replit-database) at the time of writing. This library is set up for ES6 by default.

### for ES6 Syntax

#### import Database

Use the file called e.ReplitDB.js

#### *Optional* package.json

Add this line to the root of the package.json object for ES6 Projects.

```
"type": "module",
```

#### Import ReplitDB into desired file

```
import ReplitDB from './e.ReplitDB.js';
```

### require() Syntax

#### import Database

Use the `m.e.ReplitDB.cjs`.

#### import into desired file

```
const ReplitDB = require('./ReplitDBFunctions.js');
const rdb = new ReplitDB();
```

