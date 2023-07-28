# MultiTenant Context Decouple

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg) ![Node version](https://img.shields.io/badge/node-12.x-blue.svg)

This repository presents a solution to a common problem in multitenant Pool or Bridge models. In layered architecture design with Node.js, there's often a need to couple tenant context or their identifiers across different layers. This solution makes use of Express.js and the native `async_hooks` module in Node.js to handle the tenant context effectively.

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

## 💾 Prerequisites

Ensure you have the following installed on your local machine:

- Node.js (v12.x or newer)
- npm (usually bundled with Node.js)

## ⚙️ Installation & Set Up

1. Clone this repository to your local machine:

   ```
   git clone https://github.com/Karthikmani345/multi-tenant-context-decouple.git
   ```

2. Navigate into the project directory:

   ```
   cd multi-tenant-context-decouple
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

## 🚀 Running the Application

To start the server, use the following command:

```
npm start
```

By default, the application runs on port 4000.

## 🏗️ Usage

Upon setting up the project, you can start implementing feature flags. The workshop exercises are located in the `/exercises` directory. Each exercise will guide you through the process of implementing a feature flag.

## ✅ Testing

To run tests, use the following command in the project root directory:

```
npm test
```

## 📁 Project Structure

Our application follows a layered architecture pattern and the file structure is divided accordingly. The main components are:

- `routes`: This folder is responsible for routing the application endpoints.
- `controllers`: This folder contains the controllers that handle the logic for each route.
- `services`: This folder houses the services that manage business logic and interact with the repositories.
- `repositories`: This directory contains the data access logic that interacts with the data source.
- `models`: This folder holds data models, representing the structure of the objects we're working with.
- `core`: This folder contains the core context handling code which forms the heart of our application.
- `app.js`: This file sets up our Express application.
- `server.js`: This file is responsible for starting the server.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/<your-username>/feature-flags-workshop/issues) for any outstanding items. If you want to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project>/<location>`
5. Create the pull request.

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## 📄 License

This project is licensed under the MIT License - see the `LICENSE.md` file for details.

## 💬 Contact

If you have any questions, concerns, or feedback - feel free to reach out!

## 🙏 Acknowledgements

We would like to extend our sincerest gratitude to all the contributors whose efforts have made this project possible. Your contribution to open-source is greatly appreciated! Happy coding!
