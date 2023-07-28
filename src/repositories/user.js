
const UserModel = require('../models/user')
const { get: ctxGet } = require('../core/async-context')

async function getAllUsers() {
    console.log(`layer: [Repositories][getAllUsers] x-request-id : ${ctxGet('x-request-id')}  tenant-id :'${ctxGet('tenant-id')}`);

    const userModel = new UserModel();
    return userModel.findAll();
}


async function getUsersByID(Id) {
    console.log('layer: [Repositories] tenant-id :', ctxGet('tenant-id'));

    const userModel = new UserModel();
    return userModel.findById(Id);
}


module.exports = {
    getAllUsers
}