/**
 * DoctorController
 *
 * @description :: Server-side logic for managing doctors
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	signup: function (req, res) {
        Doctor.signup({
            username: req.param('username'),
            password: req.param('password'),
            email: req.param('email'),
            firstName: req.param('firstName'),
            lastName: req.param('lastName'),
            specialization: req.param('specialization')
        }, function(err, doctor) {
            if(err) return res.negotiate(err);

            if(req.wantsJSON) {
                return res.ok(doctor)
            } else {
                return res.redirect('/welcome')
            }
        })
    }
    
};

