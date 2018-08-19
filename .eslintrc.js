module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
        "react/destructuring-assignment": [1, "always", { "ignoreClassFields": 1 }],
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
            "ExportDeclaration": { "multiline": true, "minProperties": 3 }
        }],
        "react/forbid-prop-types": [1, { "forbid": [], checkContextTypes: 1, checkChildContextTypes: 1 }],
        "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }]
    },
    "env": {
        "browser": true,
        "es6": true,
    }
};