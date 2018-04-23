let express =  require('express');
const server = express();
const port = 8095;
const routes = require('./router')
let bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


server.use('/',routes);
server.listen(port, ()=>{
    console.info('Express is listening on port ',port );
});