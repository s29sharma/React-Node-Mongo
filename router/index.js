const express = require('express')
const router =  express.Router();


import web3 from '../src/web3'
import lottery from '../src/lottery'

let manager;
let players;
let balance;
let value;
let message;


router.get('/getManager',async (req,res)=>{
    manager= await lottery.methods.manager().call();
    res.json(manager);
});

router.get('/getPlayers',async (req,res)=>{
   players =  await lottery.methods.getPlayers().call();
   var newplayers = players.length.toString()
   res.json(newplayers);
});

router.get('/getPlayerBalance',async(req,res)=>{
   const accounts = await web3.eth.getAccounts();
   console.log(accounts);
   //0x269A7887f1654d854A95357b5Aa7082c3673b20a
   var balance = await web3.eth.getBalance(accounts[0]);
   var newbalance = web3.utils.fromWei(balance,'ether');
   res.json(newbalance);
});

router.get('/getbalance',async (req,res)=>{
   balance = await web3.eth.getBalance(lottery.options.address);
   var newbalance = web3.utils.fromWei(balance,'ether');
   res.json(newbalance);
});

router.get('/getAddress',async(req,res)=>{
    const accounts = await web3.eth.getAccounts();

    res.json(accounts[0]);
})


router.post('/sendTransaction',async (req,res)=>{
    console.log(req.body);
    var val = req.body.value;
    const accounts = await web3.eth.getAccounts();
    await lottery.methods.enter().send({
      from:accounts[0],
      value:web3.utils.toWei(val,'ether'),
       gas:'1000000'
   });
   res.json("You have successfully entered lottery")
});

router.get('/pickWinner',async (req,res)=>{
   const accounts = await web3.eth.getAccounts();
   await lottery.methods.pickWinner().send({
       from:accounts[0],
       gas:'1000000'
   });

   res.json("A winner was successfully picked");
});


module.exports = router;
