const { timestamp } = require("joi/lib/types/date");
const hash = require("object-hash");


class Blockchain{
constructor(){
    this.chain = [];
    this.currTransaction = [];
}

addNewBlock(prevHash){

    let block = {
        timestamp : Date.now(),
        index : this.currTransaction.length + 1,
        prevHash : prevHash,
    };
    this.hash = hash(block);
    this.chain.push(block);
    this.currTransaction = [];
    return block;
    this.hash = hash(block);
}

addNewTransaction(sender , recipient, amount){

    this.currTransaction.push({sender , recipient , amount});
}

lastBlock(){
    return this.chain.slice(-1);
}
emptyBlock(){
    return this.chain.length === 0;
}
}

module.exports = Blockchain;