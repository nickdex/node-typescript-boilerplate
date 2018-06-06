import * as express from '@feathersjs/express';
import * as dotenv from 'dotenv';
import * as httpLogger from 'morgan';
import * as path from 'path';

import feathers from '@feathersjs/feathers';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config({ path: 'env/.env' });

// Controllers (route handlers)

// Create Express server
const app = express.default(feathers());

// #region Express configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');
app.use(httpLogger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.errorHandler());
// #endregion

// #region Service Registration
//app.configure(SomeService.initDb);
// #endregion

// #region Frontend
app.get('/', (req, res) => res.send(`Hello World\nYour message: ${req.body}`));

// #endregion

export = app;
