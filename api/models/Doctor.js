/**
 * Doctor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      user: {
        model:'user'
      },
      specialization: {
        type: 'string'
      }
  },

  signup: function(inputs, cb) {
   User.create({
     username: inputs.username,
     password: inputs.password,
     firstName: inputs.firstName,
     lastName: inputs.lastName,
     email: inputs.email,
     isDoctor: true
   })
    var uss = User.findOne({
      username: inputs.username
    })
    console.log(uss)

    Doctor.create({
      user: uss,
      specialization: inputs.specialization
    })
        .exec(cb)

  }
};

