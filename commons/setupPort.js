var app = require('../app');

app.set('port', process.env.PORT || process.env.NODE_PORTAL_DEVELOPER);
const server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});

