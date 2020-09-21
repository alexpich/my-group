const { Model } = require("objection");

class Group extends Model {
  static get tableName() {
    return "groups";
  }
}

module.exports = Group;
