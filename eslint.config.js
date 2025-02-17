import js from "@eslint/js";
import markdown from "@eslint/markdown";
import globals from "globals";

export default [
  ...markdown.configs.recommended,
  ...markdown.configs.processor,
  {
    languageOptions: {
      globals: {
        chai: "readonly",
        assert: "readonly",
        should: "readonly",
        expect: "readonly",
        describe: "readonly",
        it: "readonly",
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  js.configs.recommended,
  {
    rules: {
      "no-undef": "off",
      "no-unused-vars": "off",
      "no-var": "error",
    },
  },
];
