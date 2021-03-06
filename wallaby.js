process.env.BABEL_ENV = 'test';

module.exports = wallaby => {
  return {
    files: [
      {
        pattern: "node_modules/react/dist/react-with-addons.js",
        instrument: false,
      },
      {
        pattern: "node_modules/immutable/dist/immutable.js",
        instrument: false,
      },
      {
        pattern: "src/**/__test__/*.test.js",
        ignore: true,
      },
      "src/**/*.js",
    ],

    tests: [ "src/**/__test__/*.test.js" ],

    delays: {
      run: 500,
    },

    compilers: {
      "**/*.js": wallaby.compilers.babel(),
    },

    debug: true,

    setup: function (wallaby) {
      require("babel-polyfill");
    },

    testFramework: "ava",

    reportConsoleErrorAsError: true,

    env: {
      type: "node",
      params: {
        env: "NODE_PATH=./src",
      },
    },
  };
};
