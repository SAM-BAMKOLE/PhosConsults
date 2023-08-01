require("dotenv").config();
const contentful = require("contentful");

const client = contentful.createClient({
    space: "h4ger8mte7g9",
    accessToken: "oxw7zdNi7iOnlKm84iXdAKxVu8BXt2a-8V_d97pfVJQ",
});

module.exports = client;
