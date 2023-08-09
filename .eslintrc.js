module.exports = {
    root: true,
    extends: ["universe/native"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                "endOfLine": "auto",
                "quoteProps": "consistent",
                "printWidth": 80,
                "editor.formatOnSave": true,
                "proseWrap": "always",
                "tabSize": 4,
                "tabWidth": 4,
                "requireConfig": false,
                "useTabs": false,
                "trailingComma": "none",
                "bracketSpacing": true,
                "jsxBracketSameLine": false,
                "semi": true
            },
            {
                usePrettierrc: false
            }
        ]
    }
};
