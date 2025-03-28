import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

import slugify from "@sindresorhus/slugify";

import pluginTOC from "./eleventy-plugin-toc.js";

// Needed for GitHub Pages
export const config = {
  pathPrefix: "/new-chai-docs/",
};

export default function (eleventyConfig) {
  eleventyConfig.setLibrary(
    "md",
    markdownIt({ html: true }).use(markdownItAnchor, {
      permalink: true,
      slugify: (s) => slugify(s),
    }),
  );

  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Needed for deploying to GitHub Pages
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  eleventyConfig.addFilter("toc", pluginTOC);

  eleventyConfig.addPassthroughCopy({
    "public/": "/",
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
