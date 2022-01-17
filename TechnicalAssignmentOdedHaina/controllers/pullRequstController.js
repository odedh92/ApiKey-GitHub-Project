require('../db');
const gitModel = require('../models/GitModel');

function create(pullRequest) {
    return gitModel.create(pullRequest);
}

function read() {
    return gitModel.find({});
}
module.exports = {
    create, read
}
