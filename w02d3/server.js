const net = require("net");
const PORT = 9898;

// we need an array to store the connected clients.
const connectedClients = [];

const broadcast = function(currentClient,message){
  for (let connectedClient of connectedClients){
    if (connectedClient !== currentClient){
      connectedClient.write(`${message}`);
    }
  }
};

const server = net.createServer();

server.on(
  "connection",
  function (client) {
    console.log("Client is connected!");
    client.setEncoding('utf8');
    client.write('Welcome to my awesome server! ⛵');
  
    client.on('data', function(message){
      console.log(`received from client: ${message}`);
      broadcast(client, message);
    });
    // add the current client to the list of connected clients
    connectedClients.push(client);
  }
  );

server.listen(
  PORT,
  () => {
    console.log(`Server is listening on port ${PORT}`);
  }
);
