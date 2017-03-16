let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let UploadSchema = new Schema(
  { img:              { data: Buffer, 
                      contentType: String,
                      path: String },
    registrationTime: {type: Date, default: Date.now},
  }
);

module.exports = mongoose.model('Upload', UploadSchema);