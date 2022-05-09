import React, { useState, useEffect } from "react"
import Web3 from "web3"

// services for getting data from user's wallet
export const login = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
}
export const walletStatus = async () => {
  if (window.ethereum?._state?.accounts?.length > 0) {
    return true;
  }
  return false;
}
export const getWalletAddress = async () => {
  const web3 = new Web3(window.ethereum);
  const accountAddress = await web3.eth?.getAccounts();
  return accountAddress[0];
}
export const getWalletBalance = async () => {
  const web3 = new Web3(window.ethereum);
  const address = await getWalletAddress();
  const balance = web3.eth.getBalance(address);
  return balance;
}
