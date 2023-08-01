const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env.CONTENT_SPACE_ID,
    accessToken: process.env.CONTENT_ACCESS_TOKEN,
});

module.exports = client;
