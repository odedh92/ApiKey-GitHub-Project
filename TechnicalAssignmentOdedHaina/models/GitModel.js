const mongoose = require('mongoose')
const { Schema } = mongoose

const pullRequst = new Schema({
    action:String ,
    number: Number ,
    changes:Object ,
    pull_request:Object ,
    sender:Object 
})

module.exports = mongoose.model("Git" , pullRequst, "pullRequest")