const express = require('express');
const MovieModel = require('../models/Movie.js');
const BriefModel = require('../models/Brief.js');
const helper = require('./helpers.js');

const router = express.Router();

//handle request for all movie
router.get('/movies', helper.ensureAuthenticated, (req,resp) => { 
    MovieModel.find( {}, (err, data) => {
        if(err){
            resp.json({ "message" : 'Unable to connect to movie'});
        } else {
            resp.json(data);
        }
    });
});


//handle single movie by id
router.get('/movies/:id', helper.ensureAuthenticated, (req,resp) => { 
    MovieModel.find( {id: req.params.id}, (err, data) => {
        if(err || data.length === 0){
            resp.json({ message : 'No movie found with ID of ' + req.params.id});
        } else {
            resp.json(data);
        }
    });
});


//handle brief version of all movies
router.get('/brief', helper.ensureAuthenticated, (req,resp) => { 
    BriefModel.find( {}, (err, data) => {
        if(err){
            resp.json({ "message" : 'Unable to connect to movie'});
        } else {
            resp.json(data);
        }
    });
});

//handle all movies with substring
router.get('/find/title/:substring', helper.ensureAuthenticated, (req, resp) => {
    MovieModel.find( {title : new RegExp(req.params.substring, 'i')}, (err, data) =>{
        if(err || data.length === 0){
            resp.json( { "message": 'No movie containing ' + req.params.substring + ' found.'})
        } else {
            resp.json(data);
        }
    });
});


//handle all movies with year in between
router.get('/find/year/:start/:end' , helper.ensureAuthenticated, (req, resp) => {
    MovieModel.find().where('release_date')
        .gt(req.params.start)
        .lt(req.params.end)
        .exec( (err, data) => {
            if(err || data.length === 0){
                resp.json( {message: "No movies found"});
            } else {
                resp.json(data);
            }
        });
});

//handle all movies with rating in between
router.get('/find/rating/:min/:max' , helper.ensureAuthenticated, (req, resp) => {
    MovieModel.find().where('ratings.average')
        .gt(req.params.min)
        .lt(req.params.max)
        .exec( (err, data) => {
            if(err || data.length === 0){
                resp.json( {message: "No movies found"});
            } else {
                resp.json(data);
            }
        });
});



module.exports = router;