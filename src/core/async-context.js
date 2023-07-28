// Import AsyncLocalStorage from async_hooks
const { AsyncLocalStorage } = require("async_hooks");

// Create new instance of AsyncLocalStorage for context management
const context = new AsyncLocalStorage();

// 'get' retrieves a value from the context store using a provided key
function get(key) {
    if (!key) throw new Error('argument key is required');
    const ctx = context.getStore();
    // If the context store is a non-empty Map, return the value for the key
    return ctx instanceof Map && ctx.size > 0 ? ctx.get(key) : null;
}

// 'set' stores a value in the context store under the provided key
function set(key, value) {
    if (!key) throw new Error('argument key is required');
    const ctx = context.getStore();
    // If the context store is a Map, set the key-value pair
    return ctx instanceof Map ? ctx.set(key, value) : null;
}

// Export context, get and set
module.exports = {
    context,
    get, set
};
