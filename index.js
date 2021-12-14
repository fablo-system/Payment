const http = require('http');
const app = require('./app');
require('dotenv').config()
process.env.TZ = 'Asia/Calcutta';
const port = process.env.PORT || 4001;
const server = http.createServer(app);
server.listen(port,() => {
    console.log(`Fablo-User listening at http://localhost:${port}`)
});