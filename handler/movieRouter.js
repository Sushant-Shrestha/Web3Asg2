const express = require('express');
const MovieModel = require('../models/Movie.js');
const BriefModel = require('../models/Brief.js');
const LoginModel = require('../models/Login.js');
const helper = require('./helpers.js');
const passport = require('passport');

const router = express.Router();

//handle request for all movie
router.get('/movies', (req,resp) => { 
    MovieModel.find( {}, (err, data) => {
        if(err){
            resp.json({ "message" : 'Unable to connect to movie'});
        } else {
            resp.json(data);
        }
    });
});


//handle single movie by id
router.get('/movies/:id', (req,resp) => { 
    MovieModel.find( {id: req.params.id}, (err, data) => {
        if(err || data.length === 0){
            resp.json({ message : 'No movie found with ID of ' + req.params.id});
        } else {
            resp.json(data);
        }
    });
});


//handle brief version of all movies
router.get('/brief', (req,resp) => { 
    BriefModel.find( {}, (err, data) => {
        if(err){
            resp.json({ "message" : 'Unable to connect to movie'});
        } else {
            resp.json(data);
        }
    });
});

//handle all movies with substring
router.get('/find/title/:substring', (req, resp) => {
    MovieModel.find( {title : new RegExp(req.params.substring, 'i')}, (err, data) =>{
        if(err || data.length === 0){
            resp.json( { "message": 'No movie containing ' + req.params.substring + ' found.'})
        } else {
            resp.json(data);
        }
    });
});


//handle all movies with year in between
router.get('/find/year/:start/:end', (req, resp) => {
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
router.get('/find/rating/:min/:max', (req, resp) => {
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

//handle get all favorite
router.get('/favorites', (req,resp) => {
    resp.json(req.user.favorites);
});

//add new movies to users fav list
router.post('/favorites/:id', (req,resp) => {
    //handle single movie by id
    MovieModel.find( {id: req.params.id}, (err, data) => {
        if(err || data.length === 0){
            resp.json({ message : 'No movie found with ID of ' + req.params.id});
        } else {
            req.user.favorites.push(data);
        }
    });
});

//delete movie from users fav list
router.delete('/favorites/:id', (req,resp) => {    
    //delete the movie from array
    var temp = {...user.favorites};
    user.favorites = temp.filter( (m) => {return m.id != req.params.id});        
    
});

module.exports = router;