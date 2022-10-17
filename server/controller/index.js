const Web3 = require('web3');
const dotenv = require("dotenv");

dotenv.config();  // dotenv 사용

const rpcURL = `https://goerli.infura.io/v3/${process.env.KEY}`;
console.log(rpcURL);
// const rpcURL = process.env.INFURA_API;  // 원격 이더리움 노드에 접속할 수 있는 주소
const web3 = new Web3(rpcURL); // web3 객체 생성

const transactionTracking = async (req, res, next) => {
    try{
        const { transactionHx } = req.params;
        // {address} = {transactionHx: '0xc05e...eb08'} 형태로 저장된것임
        const txData = await web3.eth.getTransaction(transactionHx);
        res.status(200).json(txData);
    } catch (err){
        console.log(err);
        res.staus(500).json("Error!");
    }
}

module.exports = {
    transactionTracking,
};