
// check if user is logged in, otherwise refuse access
const isLoggedIn = (req,res,next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect('/')
        console.log('Failed to authenticate login')
    }
}

// ensure path is authenticated, otherwise refuse access
const ensureAuthenticated = (req,res,next) => {
    if (req.path === '/public/*' || req.isAuthenticated()) {
        return next();
        }
    else {
        res.redirect('/')
    }
}

module.exports.isLoggedIn = isLoggedIn;
module.exports.ensureAuthenticated = ensureAuthenticated;
