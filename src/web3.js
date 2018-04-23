import Web3 from 'web3';
const HDWalletProvider = require('truffle-hdwallet-provider');
let web3;

const mnemonic = "depart lobster huge river voice use head broom science impulse pioneer safe";
const provider = new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/hKOkGZCgS9FRiX2rUetf');
web3 = new Web3(provider);



export default web3;

