const userRepository = require('../repositories/user')
const { get: ctxGet } = require('../core/async-context')


async function getUsers() {
    console.log(`layer: [Service][getUsers] x-request-id : ${ctxGet('x-request-id')}  tenant-id :'${ctxGet('tenant-id')}`);

    return userRepository.getAllUsers();
}

module.exports = { getUsers }
