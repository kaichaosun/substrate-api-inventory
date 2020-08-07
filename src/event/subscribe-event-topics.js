const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    // Construct
    const wsProvider = new WsProvider('wss://cc3-5.kusama.network');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Subscribe to system events via storage
    api.query.system.eventTopics("0x0d7014ea55c1c4c3a4af8e7269f16b5ec9841b0f8f485ab3e60e390a98b4f01c", (events) => {
        console.log(`\nReceived ${events.length} events:`);

        // Loop through the Vec<EventRecord>
        events.forEach((record) => {
        // Extract the phase, event and the event types
        const { blockNumber, index } = record;

        console.log(`eventTopics: ${blockNumber}, ${index}`);
      });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});