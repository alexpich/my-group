const { Model } = require("objection");
const bcrypt = require("bcrypt-nodejs");

class User extends Model {
  static get tableName() {
    return "users";
  }

  comparePassword(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) {
        return callback(err);
      }
      callback(null, isMatch);
    });
  }
}

module.exports = User;
