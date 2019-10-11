let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');

let app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './client/dist/client')));

require('./server/config/database');
require('./server/config/routes')(app);


app.listen(8090, function(){
    console.log("Full MEAN on port 8090");
})