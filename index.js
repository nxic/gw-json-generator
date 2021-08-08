const _ = require('lodash');
const axios = require('axios').default;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let apiDocsUrl = 'http://192.168.3.190:20010/v2/api-docs';
let apiDocs = [];

// const randomId = _.random(1, 100);
// axios.get(`https://jsonplaceholder.typicode.com/todos/${randomId}`).then((res) => {
//   console.log(res.data);
// }).catch((err) => { console.error(err); });

const userInput = () => {
  console.log('userInput started');
  rl.question("api-docs url: ", function(url) {
    apiDocsUrl = url;
    rl.close();
  });

  rl.on("close", function() {
      process.exit(0);
  });
};
const logger = () => {
  console.log('logger started');
  console.log(apiDocsUrl);
};
const runner = async () => {
  await userInput();
  await logger();
};

const fetchData = async () => {
  try {
    const { data } = await axios.get(apiDocsUrl);
    // console.log(data);
    apiDocs = data;
  } catch (err) {
    console.error(err);
  }
};

fetchData();
console.warn(apiDocs);

// axios.get(apiDocsUrl).then((res) => {
//   apiDocs = { ...res.data };
// }).catch((err) => { console.error(err); });
// 
// console.log(apiDocs);
// 
// apiDocs = {
//   ...apiDocs.host,
//   ...apiDocs.paths,
// };
// 
// console.log(apiDocs);

return;
