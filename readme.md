[Replit](https://replit.com/@GeorgeSchafer/ReplitDB) project

[Github Repo](https://github.com/GeorgeSchafer/ReplitDBFunctions)

# Setup

## Import Replit database

There are two options for importing the Replit database. The ES6 option is not listed in the [Replit Database documentation](https://docs.replit.com/hosting/databases/replit-database) at the time of writing. This library is set up for ES6 by default.

### for ES6 projects (default)

#### import Database

Add these lines to the top of your dbfns.js 

```
import Database from '@replit/database';
const db = new Database();
```

#### package.json

Add this line to the root of the package.json object for ES6 Projects.

```
"type": "module",
```

#### Import dbfunctions into desired file

```
import {dbfn} from './dbfns.js';
```

### for standard projects

#### import Database

```
const Database = require("@replit/database");
const db = new Database();
```

#### Import dbfunctions into desired file

```
import {dbfn} from './dbfns.js';
```

#### package.json

Remove this line to the root of the package.json object for standard projects.

```
"type": "module",
```

## Import library into desired file

Import the functions into your file and enjoy!