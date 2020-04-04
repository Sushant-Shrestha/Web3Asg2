const helper = require('./helpers.js');

//get all fav movies
const handleAllFav = (app, Fav) => {
    app.get('/api/favorites', helper.ensureAuthenticated, (req,resp) => { 
        Fav.find( {}, (err, data) => {
            if(err){
                resp.json({ "message" : 'Unable to connect to users fav list'});
            } else {
                resp.json(data);
            }
        });
    } );
}

//add a new fav movie
const handleAddFav = (app, Fav) => {
    app.route('/api/favorites/add')
        .post((req, resp) => {
            //retrieve the form data from the http request
            const newFav  = {
                // isbn10: req.body.isbn10,
                // isbn13: req.body.isbn13, 
                // title: req.body.title, 
                // year: req.body.year, 
                // publisher: req.body.publisher,   
                // production: { 
                // pages: req.body.pages  
                /* What KV of movies do we need to add to fav? */
                title: req.body.title
                         
            };
            //now have mongoose add the movie data
            Fav.create(newFav, (err, data) => {
                //for now simply return a JSON message
                if(err){
                    resp.json({ message:'Unable to connect to fav list'});
                } else {
                    const msg = `${newFav.title} was added to the list`;
                    resp.json({ message: msg});
                }
            });
        });
}

//delete a movie from fav 
const handleDeleteFavItem = (app, Fav) => {
    app.route('/api/favorites/delete')
        .delete((req, resp) => {
            Fav.delete(req.body, (err,data) => {
                if(err){
                    resp.json({ message:'Unable to connect to fav list'});
                } else {
                    const msg = `${req.body.title} was removed to the list`;
                    resp.json({ message: msg});
                }
            })
        });
}

module.exports = {
    handleAddFav,
    handleAllFav,
    handleDeleteFavItem
}