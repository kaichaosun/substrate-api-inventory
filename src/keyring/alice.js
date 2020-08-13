// Import
const { WsProvider, ApiPromise, Keyring } = require('@polkadot/api');

async function main() {
    // Construct
    const wsProvider = new WsProvider('wss://cc3-5.kusama.network');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Do something
    console.log("genesis hash: ", api.genesisHash.toHex());
    // Create a keyring instance
    const keyring = new Keyring({ type: 'sr25519' });

    // (Advanced, development-only) add with an implied dev seed and hard derivation
    const alice = keyring.addFromUri('//Alice', { name: 'Alice default' });

    // Log some info
    console.log(`${alice.meta.name}: has address ${alice.address} with publicKey [${alice.publicKey}]`);

}

main();