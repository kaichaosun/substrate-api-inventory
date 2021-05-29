const BN = require('bn.js');

const result = new BN(100, 10).mul(new BN("1000", 10));
console.log('result: ', result.toString(10));