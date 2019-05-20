const axios = require('axios');

function HackerNewer() {}

HackerNewer.prototype = {
  getList(type) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`);
  },
  getItem(id) {
    return axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`);
  },
  getComments(id) {
    return axios.get(`http://node-hnapi.herokuapp.com/item/${id}`);
  }
};

const hackerNews = new HackerNewer();
module.exports = hackerNews;