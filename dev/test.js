const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

// test data
const previousBlockHash = '87765DA6CCF0668238C1D27C35692E11';
const currentBlockData = [
    {
        amount: 10,
        sender: 'B4CEE9C0E5CD571',
        recipient: '3A3F6E462D48E9',
    }
];

let nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData)
console.log("\x1b[33m%s\x1b[0m", "Nonce: " + nonce);
console.log("\x1b[32m%s\x1b[0m", bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));