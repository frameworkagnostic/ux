
const isTruthy = (value) => {
  if (!value) return false;
  return ['1', 'true'].indexOf(value.toLowerCase()) >= 0;
};

const OFF = 'off';
const ERROR = 'error';
const WARNING = isTruthy(process.env.CI) ? ERROR : 'warn';

module.exports = {
  "parser": "babel-eslint",
  "env": {
      "browser": true,
      "node": true,
      "jest/globals": true
  },
  "extends": "airbnb",
  "rules": {
    "comma-dangle": 0,
    "react/jsx-closing-bracket-location": 0,
    "import/order": [ERROR, {
      "groups": [
        "builtin", "external", "parent", "sibling", "index",
      ]
    }],
    "import/no-useless-path-segments": [ERROR],
    "import/no-duplicates": [ERROR],
    "import/no-extraneous-dependencies": [WARNING, {
      "devDependencies": true,
      "optionalDependencies": false,
      "peerDependencies": true
    }],
    "import/no-mutable-exports": [ERROR],
    "import/no-cycle": [ERROR, { maxDepth: 1 }],
    "import/prefer-default-export": 0,
    "import/exports-last": [ERROR],
    'import/default': [ERROR],
  },
  "plugins": ["jest"],
  settings: {
    "import/core-modules": ['react'],
  }
};
