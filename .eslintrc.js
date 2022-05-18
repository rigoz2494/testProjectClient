module.exports = {
  "extends": [
    "eslint-config-beaty-vue"
  ],
  "env": {
    "jest": true
  },
  "rules": {
    "no-magic-numbers": "off"
  },
  "ignorePatterns": ["**/src/sw.js", "**/public/sw.js"]
}
