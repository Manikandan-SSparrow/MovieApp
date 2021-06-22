"use strict"

const Hapi = require("hapi");
const db = require("./model/config/database");
const callback = require("./controller/callback");
const getMovies = require("./controller/getMovies");
const setMovies = require("./service/setMovies");

db.authenticate()
.then(() => console.log( "Connected to database.\n"))
.catch(err => console.log("Database connection failed with error " + err));

const App = async () => {

    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost' 
    });

    server.route([{
        method: 'GET',
        path: '/',
        handler: callback
    },{
        method: 'GET',
        path: '/movies',
        handler: getMovies
    },{
        method: 'PUT',
        path: '/movies',
        handler: setMovies
    }]);
    
    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

App();