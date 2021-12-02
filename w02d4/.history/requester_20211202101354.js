const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

console.log("url:",url);
console.log("path:",path);

request(url, function (error, response, body) {

  if (error){
    console.error('error:', error); // Print the error if one occurred
    return;
  }

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.

  const bytes = body.length;

  fs.writeFile( path, body, {encoding: 'utf8'}, () => {
    console.log(`Downloaded and saved ${bytes} to ${path}`);
  } );

});
