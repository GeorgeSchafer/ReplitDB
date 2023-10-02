# Welcome

[Github Repo](https://github.com/GeorgeSchafer/ReplitDB)

[Replit](https://replit.com/@GeorgeSchafer/ReplitDB) project

## Setup

### Import Replit database

There are two options for importing the Replit database. The ES6 option is not listed in the [Replit Database documentation](https://docs.replit.com/hosting/databases/replit-database) at the time of writing. This library provides options for both ES6 and CommonJS syntax.

#### ES6 Syntax

##### File Choice

Use `ReplitDB.mjs`

##### import Database

```
import ReplitDB from '/path/to/ReplitDB/ReplitDB.mjs'
```

##### *Optional* package.json

Add this line to the root of the package.json object for ES6 Projects.

```
"type": "module",
```

##### Import ReplitDB into desired file

```
import ReplitDB from 'path/to/ReplitDB/ReplitDB.mjs';
```

#### require() Syntax

##### File Choice

Use `ReplitDB.cjs`.

##### import into desired file

```
const ReplitDB = require('path/to/ReplitDB/ReplitDB.cjs');
const rdb = new ReplitDB();
```
