import markdown from "@eslint/markdown";

export default [
  ...markdown.configs.recommended,
  ...markdown.configs.processor,
];
