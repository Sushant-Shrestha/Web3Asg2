//uses passport authetication infrastructure to check if authetication is 
//needed at some point in middleware pipeline
function ensureAuthenticated (req, resp, next) {
    if(req.isAuthenticated()) {
        return next();
    }

    req.flash('info', 'Please login to view that resource');
    resp.render('login', {message: req.flash('info')});
}

module.exports = {
    ensureAuthenticated
}