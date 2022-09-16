import { HederaMirrorNodeAPIClient, TopicMessage, Order } from "./client.ts";

const client = new HederaMirrorNodeAPIClient();

const domains = new Set<string>();
const combinations = new Set<string>();
for (const letter of `0123456789`.split("")) {
  // for (const letter2 of `abcdefghijklmnopqrstuvwxyz`.split("")) {
  combinations.add(`${letter}.hbar`);
  combinations.add(`${letter}0.hbar`);
  combinations.add(`${letter}00.hbar`);
  combinations.add(`${letter}000.hbar`);
  combinations.add(`${letter}0000.hbar`);
  // }
}
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 10; j++) {
//     for (let k = 0; k < 10; k++) {
//       combinations.add(`${i}${j}${k}.hbar`);
//     }
//   }
// }
// for (let i = 0; i < 999; i++) {
//   combinations.add(`${i}.hbar`);
// }
let printedCombos = false;
const logAvailableNumDomains = () => {
  const c = Array.from(combinations);
  for (let i = 0; i < c.length; i++) {
    const domain = c[i];
    if (!domains.has(domain)) {
      console.log(domain);
    }
  }
};

export const subscribeToTopic = async (
  topidId: string,
  onMessage: (message: TopicMessage) => void
) => {
  let lastTimestamp = `000`;
  while (true) {
    const response = await client
      .listTopicMessagesById(
        topidId,
        undefined,
        [`gt:${lastTimestamp}`],
        undefined,
        100,
        Order.Asc
      )
      .catch((err: any) => {
        console.error(err._status);
      });
    if (!response) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      continue;
    }
    const messages = response.result.messages ? response.result.messages : [];

    for (const message of messages) {
      onMessage(message);
    }

    if (messages.length === 0) {
      if (!printedCombos) {
        logAvailableNumDomains();
        printedCombos = true;
        console.log(domains.size);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } else {
      lastTimestamp = messages[messages.length - 1].consensus_timestamp;
    }
  }
};

const messageHandler = (message: TopicMessage) => {
  message.message = JSON.parse(atob(message.message));
  const msgElm = document.getElementById("messages")!;
  const pre = document.createElement("pre");
  const colors = ["red", "green", "blue", "black"];
  pre.style.color = colors[msgElm.children.length % colors.length];
  const timestamp = new Date(
    Number.parseFloat(message.consensus_timestamp) * 1000
  );
  pre.innerText = JSON.stringify(
    {
      domain: message.message.nameHash.domain,
      nft: message.message.nftId,
      provider: message.message.provider,
      timestamp: `${timestamp.toLocaleDateString()} ${timestamp.toLocaleTimeString()}`
    },
    undefined,
    2
  );
  domains.add(message.message.nameHash.domain);
  msgElm.prepend(pre);
};

const hbarTopicId = "0.0.1234203";
// const creamTopicId = "0.0.1238630";
subscribeToTopic(hbarTopicId, messageHandler);
// subscribeToTopic(creamTopicId, messageHandler);
