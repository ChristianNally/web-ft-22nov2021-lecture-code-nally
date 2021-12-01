const net = require("net");
const PORT = 9898;

const configObj = {
  port: PORT,
  host: "localhost",
};

const client = net.createConnection(configObj);

client.setEncoding('utf8');


const onTyping = function(message){
  console.log(`sending ${message} to server`);
  try {
    client.write(message);
  } catch (err){
    console.log('cannot write to an ended connection');
  }
}

// this fires when stuff is typed into the terminal that launched this 'process'
process.stdin.on('data', onTyping); 

// whereas THIS fires when 'stuff' is sent from 
// the server (potentially in Australia) to this client
client.on("data", function (message) {
  console.log('server sent:', message);
});

client.on("connect", function () {
  console.log("client is connected to the server.");
});

client.on("end", function(){
  console.log('client disconnected from server.');
});
