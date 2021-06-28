"use strict"

const Hapi = require("hapi");
const db = require("./model/config/database");  
const callback = require("./test/callback");
const getMovies = require("./controller/getMovies");
const setMovies = require("./controller/service/setMovies");
const updateMovies = require("./controller/service/updateMovies");
const deleteMovies = require("./controller/service/deleteMovies");
const Joi = require('joi');

db.authenticate()
.then(() => console.log( "Connected to database.\n"))
.catch(err => console.log("Database connection failed with error " + err));

const App = async () => {

    const server = new Hapi.Server({
        port: 3000,
        host: 'localhost' 
    });
    try {
        server.route([{
            method: 'GET',
            path: '/',
            handler: callback
        },{
            method: 'GET',
            path: '/movies/get',
            handler: getMovies,
        },{
            method: 'POST',
            path: '/movies/post',
            config: {
                validate: {
                    payload: Joi.object({
                        movieName: Joi.string().required(),
                        genre: Joi.string().required(),
                        imageURL: Joi.string().required(),
                        totalViews: Joi.number().required(),
                        averageRating: Joi.number().required()
                    })
                }
            },
            handler: setMovies
        },{
            method: 'PUT',
            path: '/movies/put',
            handler: updateMovies,
            options: {
                validate: {
                    payload: Joi.object({
                        totalViews: Joi.number().required()
                    })
                }
            }
        },{
            method: 'DELETE',
            path:'/movies/delete',
            handler: deleteMovies,
            options: {
                validate: {
                    payload: Joi.object({
                        movieName: Joi.string().required()
                    })
                }
            }
        }]);
    } catch(err) {
        console.log(err);
    }
    
    await server.start();
    console.log('Server running on %s', server.info.uri);

};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

App();