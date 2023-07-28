
const { get: ctxGet } = require('../core/async-context');

class UserModel {

    constructor() {
        this.data = [
            {
                tenantId: 'tenant-WGZr0I',
                id: 1,
                name: 'foo'
            },
            {
                tenantId: 'tenant-WGZr0I',
                id: 2,
                name: 'bar'
            },
            {
                tenantId: 'tenant-WGZr0I',
                id: 3,
                name: 'baz'
            },
            {
                tenantId: 'tenant-MTaQK5',
                id: 4,
                name: 'boo'
            },
            {
                tenantId: 'tenant-MTaQK5',
                id: 5,
                name: 'moo'
            },
            {
                tenantId: 'tenant-MTaQK5',
                id: 6,
                name: 'zoo'
            }
        ]
    }

    async findAll() {
        return Promise.resolve(this.data.filter(x => x.tenantId === ctxGet('tenant-id')));
    }

    async findById(id) {
        return Promise.resolve(this.data.find(x => x.tenantId === ctxGet('tenant-id') && x.id === id));
    }

}

module.exports = UserModel;
