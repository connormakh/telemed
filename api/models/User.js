/**
 * User.js 
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      id: {
          type: 'integer',
          primaryKey: true,
          autoIncrement: true
      },
      username: {
        type: 'string',
        required: true
      },
      password: {
        type: 'string',
        required: true
      },
      firstName: {
        type: 'string',
        required: true
      },
      lastName: {
        type: 'string',
        required: true
      },
      email: {
        type: 'string',
        required: true
      },
      isDoctor: {
          type: 'boolean',
          defaultsTo: false
      }
  },

  encryptPassword: function () {
    return this.password;
  },

  signup: function(inputs, cb) {
    User.create({
          username: inputs.username,
          password: inputs.password,
          firstName: inputs.firstName,
          lastName: inputs.lastName,
          email: inputs.email,
    })
        .exec(cb)
  },

  attemptLogin: function(inputs, cb) {
    User.findOne({
          email: inputs.email,
          password: inputs.password
    })
        .exec(cb)
  }


};

