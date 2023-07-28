const userService = require('../services/user')
const { get: ctxGet } = require('../core/async-context')


async function getUsers(req, res) {
    console.log(`layer: [Controller][getUsers] x-request-id : ${ctxGet('x-request-id')}  tenant-id :'${ctxGet('tenant-id')}`);
    const data = await userService.getUsers();
    res.send(data);
}


module.exports = {
    getUsers
}