const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    // Construct
    const wsProvider = new WsProvider('wss://cc3-5.kusama.network');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Subscribe to system events via storage
    api.query.system.events((events) => {
        console.log(`\nReceived ${events.length} events:`);

        // Loop through the Vec<EventRecord>
        events.forEach((record) => {
        // Extract the phase, event and the event types
        const { event, phase } = record;
        const types = event.typeDef;

        // Show what we are busy with
        console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);
        console.log(`\t\t${event.meta.documentation.toString()}`);

        // Loop through each of the parameters, displaying the type and data
        event.data.forEach((data, index) => {
            console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
        });
        });
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(-1);
});