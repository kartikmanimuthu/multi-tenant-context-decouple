// Importing 'context' from the custom built async-context file which likely 
// includes methods for running a function in a certain asynchronous context.
const { context } = require('../core/async-context')

// This module exports a middleware function for Express.js that prepares a new context 
// for each request.
module.exports.contextMiddleware = (req, res, next) => {
    // Create a new Map to serve as the store for the context.
    // This store can be used to hold variables that can be accessed elsewhere in the 
    // asynchronous operation, providing a mechanism for maintaining state across async operations.
    const store = new Map();

    // The 'run' method runs a function (in this case, the 'next' middleware in the stack) 
    // within a context. The store Map is passed as the context store. 
    // This means that any asynchronous operations that are initiated in the 'next' middleware 
    // will have access to this same context, even if they are in different turns of the event loop.
    return context.run(store, next);
};
