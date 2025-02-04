import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default function (eleventyConfig) {
  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy({
    "public/": "/assets/",
  });

  return {
    dir: {
      input: "pages", // Source files directory
      output: "dist", // Build output directory
      includes: "_includes", // Partials/layouts
      layouts: "_layouts", // Layouts directory
    },
    markdownTemplateEngine: "njk", // Use Nunjucks for Markdown files
    htmlTemplateEngine: "njk", // Use Nunjucks for HTML files
    templateFormats: ["md", "njk", "html"], // Allowed file types
  };
}
