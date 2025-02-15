import markdownit from "markdown-it";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

// Needed for GitHub Pages
export const config = {
  pathPrefix: "/new-chai-docs/",
};

const md = markdownit();

export default function (eleventyConfig) {
  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Needed for deploying to GitHub Pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({
    "public/": "/assets/",
  });

  eleventyConfig.addFilter("jsonify", function (data) {
    return `${JSON.stringify(data, null, 2)}`;
  });

  eleventyConfig.addPairedShortcode("markdown", (content) => {
    // `markdown-it` doesn't output quotes correctly so we need to fix them here.
    return md.render(content).replace(/&amp;#39;/g, "'");
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
