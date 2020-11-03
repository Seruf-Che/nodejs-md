const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  fullName: {type: String, required: true},
  birthDate: {type: Date, required: true},
  email: {type: String, required: true, unique: true},
  cities: [{type: Schema.Types.objectId, ref: "City"}]
});

module.exports = mongoose.model("User", schema);
