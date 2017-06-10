# A starter webpack project for React

This is a starter project that uses webpack to transpile and bundle ES6 React code. To use, consider this approach:

* Fork this repo
* Rename your repo according to the app you're building

```sh
git clone https://github.com/dev-academy-challenges/[your-app].git
cd [your-app] && npm install
```

To start the development server with a watcher that refreshes your browser, run `npm start`. The assets built by webpack are placed in `server/static`. This folder is defined as a static folder in an Express.js server that can be started with `npm run server`.

Additional components should be placed in `client/components`.
