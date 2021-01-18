// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    // Construct
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    const result = await api.query.system.account("EajfcfBT8ca7pU3QAQZB6UJmpS4TKs2aaG8yGyUU4PiTUnE");

    console.log(JSON.stringify(result));
}

main();
