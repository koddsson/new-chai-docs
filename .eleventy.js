import markdownit from "markdown-it";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

function uncollide(ids, id) {
  if (!ids[id]) return id;
  let i = 1;
  while (ids[id + "-" + i]) i++;
  return id + "-" + i;
}

function setAttr(token, attr, value, options) {
  const idx = token.attrIndex(attr);

  if (idx === -1) {
    token.attrPush([attr, value]);
  } else if (options && options.append) {
    token.attrs[idx][1] = token.attrs[idx][1] + " " + value;
  } else {
    token.attrs[idx][1] = value;
  }
}

function namedHeadings(state) {
  console.log(state.tokens.entries());
  for (const [i, token] in state.tokens.entries()) {
    console.log({ i, token });
    if (token.type === "heading_open") {
      console.log("here");
      const text = md.renderer.render(state.tokens[i + 1].children, md.options);
      console.log({ text });
      const id = kebabcase(unidecode(text));
      const uniqId = uncollide(ids, id);
      ids[uniqId] = true;
      setAttr(token, "id", uniqId);
    }
  }
}

const md = markdownit().use(function (md) {
  md.core.ruler.push("named_headings", namedHeadings);
});

export default function (eleventyConfig) {
  // Enable syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

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
