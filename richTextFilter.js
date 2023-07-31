// richTextFilter.js
const { documentToHtmlString } = require("@contentful/rich-text-html-renderer");

module.exports = function (contentfulRichTextJson) {
    return documentToHtmlString(contentfulRichTextJson);
};
