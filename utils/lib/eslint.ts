// todo: migrate to eslint 9 with flat config.

import {ESLint} from "eslint"

export function createESlint(): ESLint {
  return new ESLint({
    useEslintrc: false,
    fix: true,
    overrideConfig: {
      extends: [
        "eslint:recommended",
        "plugin:jsonc/recommended-with-json",
        "plugin:jsonc/recommended-with-json5",
        "plugin:jsonc/recommended-with-jsonc"
      ],
      env: {
        browser: true,
        es2022: true
      },
      parserOptions: {
        sourceType: "module",
        ecmaVersion: "latest",
      },
      plugins: [
        "@stylistic/js"
      ],
      rules: {
        "no-undef": "off",
        "no-unused-vars": ["warn", {
          "vars": "local"
        }],
        "no-var": "warn",
        "prefer-const": "warn",
        "prefer-arrow-callback": "warn",
        "@stylistic/js/array-bracket-newline": ["warn", {
          "multiline": true,
          "minItems": null
        }],
        "@stylistic/js/array-bracket-spacing": ["warn", "never"],
        "@stylistic/js/array-element-newline": ["warn", "always"],
        "@stylistic/js/arrow-spacing": "warn",
        "@stylistic/js/block-spacing": "warn",
        "@stylistic/js/brace-style": "warn",
        "@stylistic/js/comma-dangle": ["warn", "never"],
        "@stylistic/js/comma-spacing": ["warn", {
          "before": false,
          "after": true
        }],
        "@stylistic/js/comma-style": ["warn", "last"],
        "@stylistic/js/function-call-argument-newline": ["warn", "consistent"],
        "@stylistic/js/function-call-spacing": ["warn", "never"],
        "@stylistic/js/function-paren-newline": ["warn", "multiline"],
        "@stylistic/js/implicit-arrow-linebreak ": ["warn", "beside"],
        "@stylistic/js/indent": ["warn", 2, {
          "VariableDeclarator": "first",
          "FunctionDeclaration": {
            "parameters": "first"
          },
          "FunctionExpression": {
            "parameters": "first"
          },
          "CallExpression": {
            "arguments": "first"
          },
          "ArrayExpression": "first",
          "ObjectExpression": "first",
          "ImportDeclaration": "first",
          "flatTernaryExpressions": true
        }],
        "@stylistic/js/key-spacing": ["warn", {
          "beforeColon": false,
          "mode": "strict"
        }],
        "@stylistic/js/keyword-spacing": ["warn", {
          "before": true
        }],
        "@stylistic/js/lines-between-class-members": ["warn", "always"],
        "@stylistic/js/max-len": ["warn", {
          "code": 120
        }],
        "@stylistic/js/multiline-ternary": ["warn", "never"],
        "@stylistic/js/new-parens": "warn",
        "@stylistic/js/no-extra-semi": "warn",
        "@stylistic/js/no-mixed-spaces-and-tabs": "warn",
        "@stylistic/js/no-multi-spaces": "warn",
        "@stylistic/js/no-multiple-empty-lines": "warn",
        "@stylistic/js/no-tabs": "warn",
        "@stylistic/js/no-trailing-spaces": "warn",
        "@stylistic/js/no-whitespace-before-property": "warn",
        "@stylistic/js/nonblock-statement-body-position": ["warn", "beside"],
        "@stylistic/js/object-curly-newline": ["warn", {
          "consistent": true
        }],
        "@stylistic/js/object-curly-spacing": ["warn", "always"],
        "@stylistic/js/object-property-newline": ["warn", {
          "allowAllPropertiesOnSameLine": true
        }],
        "@stylistic/js/padded-blocks": ["warn", "never"],
        "@stylistic/js/quotes": ["warn", "double"],
        "@stylistic/js/semi": ["warn", "never"],
        "@stylistic/js/semi-spacing": "warn",
        "@stylistic/js/space-before-blocks": "warn",
        "@stylistic/js/space-before-function-paren": ["warn", {
          "anonymous": "always",
          "named": "never",
          "asyncArrow": "always"
        }],
        "@stylistic/js/space-in-parens": ["warn", "never"],
        "@stylistic/js/eol-last": ["warn", "never"]
      }
    }
  })
}
