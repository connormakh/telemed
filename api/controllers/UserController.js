/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    signup: function(req, res) {
        User.signup({
            username: req.param('username'),
            password: req.param('password'),
            firstName: req.param('firstName'),
            lastName: req.param('lastName'),
            email: req.param('email')
        }, function(err, user) {
            if(err) return res.negotiate(err)

            req.session.me = user.id

            if(req.wantsJSON) {
                return res.ok('Signup successful')
            } else {
                return res.redirect('/welcome')
            }
            
        })
    },
    login: function(req, res) {
        // See `api/responses/login.js`
        return res.login({
            email: req.param('email'),
            password: req.param('password'),
            successRedirect: '/',
            invalidRedirect: '/login'
        });
    },
    logout: function(req, res) {
        req.session.me = null
        if(req.wantsJSON) {
            return res.ok('sign out successful');
        } else {
            return res.redirect('/');
        }
    }

};

