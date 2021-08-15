//comments just for explaining and learning process
//not all of them are needed since they make the code dirty.
const SHA256 = require('crypto-js/sha256')
class Block {

    //@param index to locate a block in the chain
    //@param timestamp when the block was created
    //@param data details of the transaction
    //@param previousHash Hash of the previous block in the chain
    constructor(index, timestamp, data, previousHash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        //to be calculated for each individual block
        this.hash = this.calculateHash();
    }

    //Based on the properties of the contructor we will calculate the hash using SHA256
    //@return the hash of the block
    //@requires crypto-js from npm
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
}

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    //the first block of the chain will always be manually created
    //@return first block of the chain
    createGenesisBlock() {
        return new Block(0, "01/01/2021", "Genesis Block", "0")
    }

    //returns the latest block of the chain
    //@return block
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    //in reality we cannot added so easily there are thousand of validations and checksums
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }


}

let myCustomCoin = new BlockChain();
myCustomCoin.addBlock(new Block(1, "02/01/2021", { amount: 3 }));
myCustomCoin.addBlock(new Block(2, "03/01/2021", { amount: 9 }));


console.log(JSON.stringify(myCustomCoin, null, 4));