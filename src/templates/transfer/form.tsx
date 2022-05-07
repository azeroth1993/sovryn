import React, { useState, useEffect, useRef } from "react"
import Input from "../../components/inputs/input"
import Button from '../../components/button/button'
import { EthLogo } from '../../components/icons';
import ToggleButton from '../../components/button/toggleButton'
import ToggleGroup from '../../components/button/toggleGroup'
import { useGetAccountName, useGetPublicAddress, useGetAccountBalance } from '../../hooks/accountDetails'

// types interface
interface TransferForm {
  onSubmit: (details: object) => void
}

const TransferForm: React.FunctionComponent<TransferForm> = ({ onSubmit }) => {

  // states & variables
  const [unit, setUnit] = useState('eth');
  const [amountValue, setamountValue] = useState<any>(0);
  const [recipient, setRecipient] = useState<string>('');
  const [assetType, setAssetType] = useState<string>('reth');
  const wallet = useGetAccountBalance();
  const transferForm = useRef(null);

  // functions & handlers
  const handleAssetSelection = (value: string, isActive: boolean) => {
    setAssetType(value);
    value === 'reth' ? setUnit('eth') : setUnit('weenus');
  }

  const handleAmountSelection = (value: string | number | undefined, isActive: boolean) => {
    isActive ? setamountValue(0) : setamountValue(Number(value) * getTokenBalance(assetType));
  }
  
  const getTokenBalance = (asset:string) => {
    return wallet.filter((x: any) => x.token === asset)[0].amount;
  }

  const handleAmountInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setamountValue(e.currentTarget.value);
  }

  const handleRecipientInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.currentTarget.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (amountValue > 0 && recipient !== '') {
      if (assetType === 'reth' && amountValue < getTokenBalance('reth')) {
        // return true
      } else if (assetType === 'weenus' && amountValue < getTokenBalance('weenus')) {
        // return true
      }
    }
    const transferDetails = {
      token: assetType,
      amount: amountValue,
      sender: '0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0',
      recipient: recipient,
      fee: '0.0006rBTC'
    }
    onSubmit(transferDetails);
  }
  

  // returned elements
  return (
    <form ref={transferForm} className="block w-full" onSubmit={handleSubmit}>
      {/* form title */}
      <h1 className="block w-full text-cream text-4xl font-bold uppercase text-center">send</h1>
      {/* asset selection */}
      <label className={`block capitalize w-full text-lg text-white mb-2`}>asset:</label>
      <ToggleGroup value={assetType} onChange={handleAssetSelection} className="grid grid-cols-2 gap-0 mb-2">
        <ToggleButton value={'reth'} selected={true} className="select-none h-14 text-base text-dark-blue border border-dark-blue rounded-l-lg font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">
          <EthLogo className="block w-5 mr-3" />
          rETH
        </ToggleButton>
        <ToggleButton value={'weenus'} className="select-none h-14 text-base text-dark-blue border border-dark-blue rounded-r-lg font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">
          <img className="block w-8 mr-2" src="weenus.png" alt="weenus token" />
          WEENUS
        </ToggleButton>
      </ToggleGroup>
      <span className="block w-full mb-7 capitalize text-cream text-sm">available balance: <span className="uppercase">{getTokenBalance(assetType) + ' ' + assetType}</span></span>
      {/* amount to send */}
      <Input 
        type="number"
        label="amount:" 
        min={0}
        value={amountValue}
        unit={unit}
        id="recipient address" 
        className="mb-5"
        labelClass="capitalize text-white mb-2" 
        inputClass="text-center px-16 rounded-lg text-main-bg font-bold text-lg" 
        unitClass="text-main-bg text-lg font-bold uppercase pr-4"
        required
        onInput={handleAmountInput}
      />
      {/* amount buttons */}
      <ToggleGroup value={amountValue} onChange={handleAmountSelection} className="grid grid-cols-5 gap-0 mb-7">
        <ToggleButton value={0.10} className="select-none text-base text-dark-blue border border-dark-blue rounded-l-lg font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">10%</ToggleButton>
        <ToggleButton value={0.25} className="select-none text-base text-dark-blue border border-dark-blue font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">25%</ToggleButton>
        <ToggleButton value={0.50} className="select-none text-base text-dark-blue border border-dark-blue font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">50%</ToggleButton>
        <ToggleButton value={0.75} className="select-none text-base text-dark-blue border border-dark-blue font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">75%</ToggleButton>
        <ToggleButton value={1.0} className="select-none text-base text-dark-blue border border-dark-blue rounded-r-lg font-bold" activeClass="bg-dark-blue [color:#E9EAE9!important]">100%</ToggleButton>
      </ToggleGroup>
      {/* recipient address */}
      <Input 
        label="send to:" 
        id="recipient address" 
        value={recipient}
        placeholder="Type or Paste address"
        className="mb-7"
        pattern="^0x[a-fA-F0-9]{40}$"
        labelClass="capitalize text-white mb-2" 
        inputClass="text-center px-4 rounded-lg text-main-bg font-bold text-lg" 
        required
        onInput={handleRecipientInput}
      />
      {/* submit button */}
      <Button type="submit" text="submit" color="#FEC004" textColor="#101010" className="rounded-lg w-48 text-xl uppercase font-bold mx-auto" />
    </form>
  )

}
export default TransferForm

