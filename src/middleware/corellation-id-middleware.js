const { v4: uuidv4 } = require('uuid');
const { getDynamicUUID } = require('../core/utils');

// Importing 'context' from the custom built async-context file which likely 
// includes methods for getting and setting context data.
const { context } = require('../core/async-context')

// This module exports a middleware function for Express.js that generates 
// correlation identifiers for each request.
module.exports.corellationMiddleware = async (req, res, next) => {

    // Get the current store/context associated with the async resource.
    const ctx = context.getStore();

    // Set 'x-org-requestid' in the context with a new uuid.
    // This could be used to track the request in subsequent asynchronous operations.
    ctx.set('x-request-id', uuidv4());

    // Set 'tenant-id' in the context with a new uuid.
    // This could be used to isolate/segregate data between different tenants in a multi-tenant system.
    ctx.set('tenant-id', getDynamicUUID(['tenant-WGZr0I', 'tenant-MTaQK5']));

    // Call the next middleware in the stack.
    next();
};
