const axios = require("axios");

exports.getPost = function () {
  return axios.get("https:// jsonplaceholder.typicode.com/posts/1");
};
