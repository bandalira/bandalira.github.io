module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("apple-touch-icon.png");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("favicon-96x96.png");
  eleventyConfig.addPassthroughCopy("favicon.ico");
  eleventyConfig.addPassthroughCopy("favicon.svg");
  eleventyConfig.addPassthroughCopy("imaxe.jpg");
  eleventyConfig.addPassthroughCopy("site.webmanifest");
  eleventyConfig.addPassthroughCopy("web-app-manifest-192x192.png");
  eleventyConfig.addPassthroughCopy("web-app-manifest-512x512.png");
  eleventyConfig.addPassthroughCopy("logos");

  return {
    htmlTemplateEngine: "njk",
    dir: {
      includes: "_includes",
      input: ".",
      output: "_site"
    }
  };
};
