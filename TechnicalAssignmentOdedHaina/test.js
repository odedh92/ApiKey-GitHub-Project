require('../db')
const gitModel = require('./GitModel')
const mongoose = require('mongoose')

const pullTamplate ={
    user:"Oded"
}
async function create(data){
    return await gitModel.create(data)
}
console.log('start create')
create(pullTamplate)