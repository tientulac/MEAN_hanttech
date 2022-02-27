const app = require('../app');
const setupPort = require('../commons/setupPort');
const api = require('../apis/index');
const handleError = require('../commons/handleErrors');
const allowCors = require('../commons/enableCors');
//--------------------------------------------------------CONNECT MONGO---------------------------------------------------
const connectMongoose = require('../WebConfig');
const cron = require('../cron');

connectMongoose.connectDB();
// cron.start();
