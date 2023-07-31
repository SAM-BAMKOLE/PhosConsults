const Card = require("./src/_includes/components/service");
const ArticleCard = require("./src/_includes/components/articleCard");
const Navbar = require("./src/_includes/components/navbar");
const contentfulClient = require("./contentful");
const renderRichText = require("./richTextFilter");
const frontMatter = require("front-matter");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/css");
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/message.php");
    // creates card component
    eleventyConfig.addShortcode("card", Card);
    eleventyConfig.addShortcode("articleCard", ArticleCard);
    eleventyConfig.addShortcode("navbar", Navbar);
    // returns articles from contentful
    eleventyConfig.addCollection("contentfulArticles", async () => {
        const response = await contentfulClient.getEntries({
            content_type: "pageArticlePost",
        });
        return response.items;
    });

    // returns services from contentful
    eleventyConfig.addCollection("contentfulServices", async () => {
        const response = await contentfulClient.getEntries({
            content_type: "services",
        });
        return response.items;
    });

    // filter for rich text gotten from contentful
    eleventyConfig.addNunjucksFilter("renderRichText", renderRichText);
    // custom filter to get aliases from front-matter for links
    eleventyConfig.addFilter("alias", (content) => {
        const { attributes } = frontMatter(content);
        return attributes.alias || "";
    });
    // Custom date filter
    eleventyConfig.addFilter("formatDate", function (dateString) {
        const options = { year: "numeric", month: "long", day: "numeric" };
        return new Date(dateString).toLocaleDateString(undefined, options);
    });
    // Custom filter to truncate text to a specific length
    eleventyConfig.addFilter("truncateText", function (text, length) {
        if (text.length <= length) {
            return text;
        } else {
            return text.slice(0, length) + "...";
        }
    });

    // custom slice method
    eleventyConfig.addNunjucksFilter("limit", (arr, start, last) => arr.slice(start, last));

    // Custom filter to filter articles by category
    eleventyConfig.addFilter("filterByTags", function (articles, category) {
        return articles.filter((article) => {
            return article.fields.tags.includes(category);
        });
    });
    // Pagination configuration for each article category
    eleventyConfig.addCollection("articleCategories", function (collection) {
        const categories = new Set();

        // Loop through the contentfulArticles collection
        collection.getAll().forEach((item) => {
            if (item.data.collections.contentfulArticles) {
                let articles = item.data.collections.contentfulArticles;
                articles.forEach((article) => {
                    article.fields.tags.forEach((tag) => categories.add(tag));
                });
            }
        });
        return Array.from(categories);
    });

    return {
        dir: {
            input: "src",
            output: "_site",
            includes: "_includes",
        },
        templateFormats: ["md", "njk", "html"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
