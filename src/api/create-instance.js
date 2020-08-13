// Import
const { ApiPromise, WsProvider } = require('@polkadot/api');

async function main() {
    // Construct
    const wsProvider = new WsProvider('wss://cc3-5.kusama.network');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Do something
    console.log("genesis hash: ", api.genesisHash.toHex());
    console.log("runtime metadata: ", api.runtimeMetadata.toString());
    console.log("runtime version: ", api.runtimeVersion.toString());
    console.log("library info: ", api.libraryInfo);
}

main();
