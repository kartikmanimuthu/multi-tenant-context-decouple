const http = require('http');

const app = require('./app');


const config = {
    port: 4000
}
const server = http.createServer(app);


server.listen(config.port, () => {
    console.info(`server is listening at port : ${config.port}`);
})