import { DaprPubSubStatusEnum, DaprServer, CommunicationProtocolEnum } from "@dapr/dapr";
// import { CommunicationProtocolEnum } from "dapr-client";

const daprHost = "127.0.0.1"; // Dapr Sidecar Host
const daprPort = "3500"; // Dapr Sidecar Port of this Example Server
const serverHost = "127.0.0.1"; // App Host of this Example Server
const serverPort = "50051"; // App Port of this Example Server "

async function start() {
  const server = new DaprServer({ serverHost: serverHost, serverPort: serverPort, clientOptions: { daprHost, daprPort } });

  const pubSubName = "my-pubsub-name";
  const topic = "topic-a";

  // Configure Subscriber for a Topic
  // Method 1: Direct subscription through the `subscribe` method
  await server.pubsub.subscribe(pubSubName, topic, async (data: any, headers: object) => {
    console.log(`Received Data: ${JSON.stringify(data)} with headers: ${JSON.stringify(headers)}`)
    // return DaprPubSubStatusEnum.SUCCESS;
  });

  // Start the server
  await server.start();


}

start();