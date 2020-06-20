const { stringToU8a } = require('@polkadot/util');

let result = stringToU8a('hello'); // Uint8Array [ 104, 101, 108, 108, 111 ]

console.log(result);


