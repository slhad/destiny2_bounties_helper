import stylistic from "@stylistic/eslint-plugin"

// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
    { ignores: ["files/**/*", "lib/**/*", "node_modules/**/*"] },
    {
        files: ["**/*.{js,mjs,mts,cjs,ts}"],
        "plugins":
            { "@stylistic": stylistic },
        "rules": {
            "@stylistic/semi": ["error", "never"],
            "@stylistic/quotes": ["error", "double"],
            "@stylistic/object-curly-newline": ["error", { "ObjectExpression": { "multiline": true } }],
            "@typescript-eslint/no-explicit-any": ["off"],
            "@typescript-eslint/no-unused-vars": ["warn"],
            "@typescript-eslint/consistent-indexed-object-style": ["warn"],
            "@typescript-eslint/no-require-imports": "warn",
            "@typescript-eslint/no-extraneous-class": "warn",
            "@typescript-eslint/consistent-type-definitions": "warn",
            "@stylistic/object-property-newline":"error"
        }
    }
)