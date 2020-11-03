const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name: {type: String, required: true},
  location: {type: {
    lat: {type: String, required: true},
    lon: {type: String, required: true}
  }},
  user: {type: Schema.Types.objectId, ref: "User"}
});

module.exports = mongoose.model("City", schema);