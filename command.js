const prefix = "/";
const start = new RegExp(`^${prefix}start$`);
const menu = new RegExp(`^${prefix}menu$`);
const about = new RegExp(`^${prefix}about$`);
const quotes = new RegExp(`^${prefix}quotes$`);
const news = new RegExp(`^${prefix}news$`);
const infogempa = new RegExp(`^${prefix}infogempa$`);
const support = new RegExp(`^${prefix}support$`);
module.exports = {
    start: start,
    menu: menu,
    about: about,
    quotes: quotes,
    infogempa: infogempa,
    support: support,
    news: news
};
