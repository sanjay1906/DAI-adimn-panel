const mongoose = require('mongoose');
const schema = mongoose.Schema;

const deseaseSchema = new schema({
    deseaseName : String,
    summary : String,
    cause :String,
    medicine:String,
    naturalCare:String,
})

module.exports  = mongoose.model("desease",deseaseSchema);