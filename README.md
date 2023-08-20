[Github Repo](https://github.com/GeorgeSchafer/ReplitDB)

[Replit](https://replit.com/@GeorgeSchafer/ReplitDB) project

# Setup

## Import Replit database

There are two options for importing the Replit database. The ES6 option is not listed in the [Replit Database documentation](https://docs.replit.com/hosting/databases/replit-database) at the time of writing. This library provides options for both ES6 and CommonJS syntax.

### ES6 Syntax

#### File Choice

Use `e.ReplitDB.js`

#### import Database

```
import ReplitDB from '/path/to/e.ReplitDB.js'
```

#### *Optional* package.json

Add this line to the root of the package.json object for ES6 Projects.

```

"type": "module",
```

#### Import ReplitDB into desired file

```
import ReplitDB from 'path/to/e.ReplitDB.js';
```

### require() Syntax

#### File Choice

Use `m.e.ReplitDB.cjs`.

#### import into desired file

```
const ReplitDB = require('./ReplitDBFunctions.js');
const rdb = new ReplitDB();
```
