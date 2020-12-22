let Blockchain = require('./Blockchain/Blockchain');
const hash = require('object-hash');
const blockchain = new Blockchain(); 


let PROOF = 2222;

const validProof = (proof)=>{
    const    guessHash = hash(proof)
    console.log('guessedHash : ' ,  guessHash)

    return guessHash == hash(PROOF);
}
 const proofOfWork = ()=>{
    let proof = 0;;
    while(true){
        if(!validProof(proof)){
            proof ++
        }
        else{
            break;
        }
    }
    return proof;
 }

 if(proofOfWork() == PROOF){
    blockchain.addNewTransaction('Sibghat','Ali', 2000);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
 }

 console.log("chain  :" , blockchain.chain);

 if(proofOfWork() == PROOF){
    blockchain.addNewTransaction('Sibghat','Ali', 2000);
    let prevHash = blockchain.lastBlock() ? blockchain.lastBlock().hash : null;
    blockchain.addNewBlock(prevHash);
 }
 console.log("chain  :" , blockchain.chain);
