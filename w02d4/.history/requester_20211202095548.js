const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log("url:",url);
console.log("path:",path);

request(url, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile( path, body, {}, () => {
    console.log('I am done');
  } );

});
