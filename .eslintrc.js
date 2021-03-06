module.exports = {
  "extends": "google",
  "rules": {
    "max-len": ["error", 150],
    "no-trailing-spaces": "off",
    "space-in-parens": ["error", "never"],
    "array-bracket-spacing": ["error", "never"],
    "no-multiple-empty-lines": ["error", { "max": 10, "maxEOF": 1 }],
    "no-multi-spaces": ["error", { "exceptions": { "VariableDeclarator": true } }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": true }],
    "key-spacing": ["error", {
      "multiLine": {
        "beforeColon": false,
        "afterColon": true
      }
    }],
    "keyword-spacing": ["error", {
      "before": true,
      "after": false,
      "overrides": {
        "else": {
          "after": true
        }
      }
    }]
  }
};
