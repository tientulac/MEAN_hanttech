const app = require('../app');
const user = require('../routes/user');
const email = require('../routes/email');

app.use('/account', user);
app.use('/email', email);