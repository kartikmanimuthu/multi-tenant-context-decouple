# MultiTenant Context Decouple

This repository presents a solution to a common problem in multitenant Pool or Bridge models. In layered architecture design with Node.js, there's often a need to couple tenant-IDs or their identifiers across different layers. This solution makes use of Express.js and the native `async_hooks` module in Node.js to handle the tenant context effectively.

## Motivation

Handling multitenancy effectively is a challenge in software design. The aim here is to maintain the tenant context across asynchronous operations, in a way that doesn't involve passing the context through each layer explicitly. This solution takes advantage of Node.js's native `async_hooks` module, which provides an API to track asynchronous resources.

## Visual Overview

Here are some architecture diagrams demonstrating how the tenant context is maintained:

<img src="/docs/layered_arch.png" alt="Architecture Diagram 1" title="layered architecture">

<img src="/docs/dont&apos;s.png" alt="Architecture Diagram 2" title="dont">

<img src="/docs/do&apos;s.png" alt="Architecture Diagram 3" title="do">
## Tech Stack

This project is built with:

- Node.js: An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.
- Express.js: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- async_hooks: A native Node.js module that allows tracking of asynchronous resources.

Stay tuned for more updates and enhancements to this multitenant context-awareness solution in Node.js. Your contributions and suggestions are welcome!

---
