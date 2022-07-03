// "proud verify icon then cash odor security educate choice december earth symptom hole frame mirror approve fantasy surround degree future liar walk chair father";

import * as TonWeb from "tonweb";
import * as TonMnemonic from "tonweb-mnemonic";
  
// For calculations in the blockchain, we use BigNumber (BN.js). https://github.com/indutny/bn.js
// Don't use regular {Number} for coins, etc., it has not enough size and there will be loss of accuracy.

const BN = TonWeb.utils.BN;

// Blockchain does not operate with fractional numbers like `0.5`.
// `toNano` function converts TON to nanoton - smallest unit.
// 1 TON = 10^9 nanoton; 1 nanoton = 0.000000001 TON;
// So 0.5 TON is 500000000 nanoton

const toNano = TonWeb.utils.toNano;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function createPaymentChannel() {

  const providerUrl = 'https://testnet.toncenter.com/api/v2/jsonRPC'; // TON HTTP API url. Use this url for testnet
  const apiKey = prompt("Enter your API key (you can get it by https://t.me/tontestnetapibot):") || "1a2a0eb3a25499b9fdac4727280d9531fa70b005af2f591d6bb7dba9a6a83186";

  window.tonweb = new TonWeb(new TonWeb.HttpProvider(providerUrl, { apiKey })); // Initialize TON SDK

  const mnemonicAString = prompt("Enter you testnet wallet mnemonic (e.g. apple orange ... banan") || "proud verify icon then cash odor security educate choice december earth symptom hole frame mirror approve fantasy surround degree future liar walk chair father";
  
  console.log(mnemonicAString);

  const mnemonicA = mnemonicAString.split(" ");

  const mnemonicB = [
    "cruel", 
    "enrich",
    "eye",
    "fade",
    "state",
    "sport",
    "isolate",
    "lemon",
    "tired",
    "front",
    "dog",
    "prison",
    "cool",
    "train",
    "veteran",
    "issue",
    "profit",
    "wall",
    "actor",
    "fatal",
    "senior",
    "dry",
    "diary",
    "donor",
  ];

  window.keyPairA = await TonMnemonic.mnemonicToKeyPair(mnemonicA);
  window.keyPairB = await TonMnemonic.mnemonicToKeyPair(mnemonicB);

  const WalletClass = window.tonweb.wallet.all["v4R2"];

  window.walletA = new WalletClass(window.tonweb.provider, {
      publicKey: window.keyPairA.publicKey,
      wc: 0
  });

  window.walletB = new WalletClass(window.tonweb.provider, {
    publicKey: window.keyPairB.publicKey,
  });


  const walletAddressA = await window.walletA.getAddress(); // address of this wallet in blockchain
  console.log("walletAddressA: ", walletAddressA.toString(true, true, true));

  const walletAddressB = await window.walletB.getAddress(); // address of this wallet in blockchain
  console.log("walletAddressB: ", walletAddressB.toString(true, true, true));


  /////

  window.channelInitState = {
    balanceA: toNano("2"), // A's initial balance in Toncoins. Next A will need to make a top-up for this amount
    balanceB: toNano("1"), // B's initial balance in Toncoins. Next B will need to make a top-up for this amount
    seqnoA: new BN(0), // initially 0
    seqnoB: new BN(0)  // initially 0
  };

  window.channelConfig = {
      channelId: new BN(101), // Channel ID, for each new channel there must be a new ID
      addressA: walletAddressA, // A's funds will be withdrawn to this wallet address after the channel is closed
      addressB: walletAddressB, // B's funds will be withdrawn to this wallet address after the channel is closed
      initBalanceA: window.channelInitState.balanceA,
      initBalanceB: window.channelInitState.balanceB
  }

  // // Each on their side creates a payment channel object with this configuration

  window.channelA = window.tonweb.payments.createChannel({
      ...window.channelConfig,
      isA: true,
      myKeyPair: window.keyPairA,
      hisPublicKey: window.keyPairB.publicKey,
  });

  window.channelAddress = await window.channelA.getAddress(); // address of this payment channel smart-contract in blockchain
  console.log("channelAddress: ", window.channelAddress.toString(true, true, true));

  window.channelB = window.tonweb.payments.createChannel({
      ...window.channelConfig,
      isA: false,
      myKeyPair: window.keyPairB,
      hisPublicKey: window.keyPairA.publicKey,
  });

  if ((await window.channelB.getAddress()).toString() !== window.channelAddress.toString()) {
      throw new Error('Channels address not same');
  }

  // // Interaction with the smart contract of the payment channel is carried out by sending messages from the wallet to it.
  // // So let's create helpers for such sends.

  window.fromWalletA = window.channelA.fromWallet({
      wallet: window.walletA,
      secretKey: window.keyPairA.secretKey,
  });

  window.fromWalletB = window.channelB.fromWallet({
      wallet: window.walletB,
      secretKey: window.keyPairB.secretKey,
  });



  console.log("\n\nChecking if a payment channel contract is deployed...");

  try {
    await window.channelA.getChannelState();
  } catch {
    console.log("Deploying a payment channel contract...");
    await window.fromWalletA.deploy().send(toNano("0.05"));
    await sleep(10000);
  } finally {
    console.log("Fetching the payment channel state...");
    const state = await window.channelA.getChannelState();
    console.log("The payment channel state is", state);
  }

  // // TOP UP

  console.log("\n\nTopping up balances...");

  try {
    const data = await channelA.getData();
    
    if (data.balanceA < channelInitState.balanceA) {
      await fromWalletA
        .topUp({ coinsA: channelInitState.balanceA, coinsB: new BN(0) })
        .send(channelInitState.balanceA.add(toNano('0.05'))); // +0.05 TON to network fees

      await sleep(10000);
    } 
    
    if (data.balanceB < channelInitState.balanceB) {
      await fromWalletB
        .topUp({ coinsA: new BN(0), coinsB: channelInitState.balanceB })
        .send(channelInitState.balanceB.add(toNano('0.05'))); // +0.05 TON to network fees

      await sleep(10000);
    }
  } finally {
    console.log("Fetching the payment channel balances...");
    const data = await channelA.getData();

    console.log("BalanceA:", data.balanceA.toString());
    console.log("BalanceB:", data.balanceB.toString());
  }

  
  console.log("\n\nInitializing the payment channel...");

  try {
    const state = await channelA.getChannelState();

    if (state !== 1) {
      await fromWalletA.init(channelInitState).send(toNano("0.05"));
      await sleep(10000);
    }
  } finally {
    console.log("Fetching the payment channel state...");
    const state = await channelA.getChannelState();
    console.log("The payment channel state is", state);
  }
}

async function closePaymentChannel() {
  const channelState1 = {
    balanceA: toNano('1.5'),
    balanceB: toNano('1.5'),
    seqnoA: new BN(1),
    seqnoB: new BN(0)
  };

  // A signs this state and send signed state to B (e.g. via websocket)

  const signatureA1 = await channelA.signState(channelState1);

  // B checks that the state is changed according to the rules, signs this state, send signed state to A (e.g. via websocket)

  if (!(await channelB.verifyState(channelState1, signatureA1))) {
      throw new Error('Invalid A signature');
  }
  const signatureB1 = await channelB.signState(channelState1);


  console.log("\n\nClosing the payment channel...");

  try {
    const state = await window.channelA.getChannelState();

    if (state !== 0) {
      const signatureCloseB = await window.channelB.signClose(channelState1);

      if (!(await window.channelA.verifyClose(channelState1, signatureCloseB))) {
        throw new Error('Invalid B signature');
      }

      await window.fromWalletA.close({
        ...channelState1,
        hisSignature: signatureCloseB
      }).send(toNano("0.05"));

      await sleep(10000);
    }
  } finally {
    console.log("Fetching the payment channel state...");
    const state = await window.channelA.getChannelState();
    
    console.log("The payment channel state is", state);

    
    console.log("Fetching the payment channel balances...");
    const data = await window.channelA.getData();

    console.log("BalanceA:", data.balanceA.toString());
    console.log("BalanceB:", data.balanceB.toString());
  }
}

window.onload = async () => await createPaymentChannel();

const withdrawAndSignoutButton = document.getElementById("withdraw-and-signout-button");
withdrawAndSignoutButton.addEventListener("click", async () => await closePaymentChannel());