import React from "react"
import { ArrowDown } from "../../components/icons"
import Button from "../../components/button/button"

interface TransferConfirmation {
  transferDetails: {
    token?: string,
    amount?: any,
    sender?: string,
    recipient?: string,
    fee?: string
  },
  onConfirm: () => void
}

const TransferConfirmation: React.FunctionComponent<TransferConfirmation> = ({ transferDetails, onConfirm }) => {

  console.log(transferDetails);
  

  return (
    <div className="text-cream capitalize text-center">
      <p className="block w-full text-3xl">review transaction</p>
      <div className="block w-full mt-10">
        <span className="block w-full uppercase text-xl mb-2">send</span>
        <span className="block w-full uppercase text-xl text-dark-yellow">{transferDetails.amount + ' ' + transferDetails.token}</span>
      </div>
      <div className="block w-full mt-10">
        <span className="block w-full text-xs capitalize"><span className="text-sm text-dark-yellow mr-2">from :</span>{transferDetails.sender}</span>
        <ArrowDown className="fill-current w-8 mx-auto my-6" />
        <span className="block w-full text-xs capitalize"><span className="text-sm text-dark-yellow mr-2">to :</span>{transferDetails.recipient}</span>
      </div>
      <div className="flex justify-center items-center w-full my-8 px-2">
        <span className="text-dark-yellow mr-2">tx fee :</span>
        <span>{transferDetails.fee}</span>
      </div>
      <Button onClick={onConfirm} type="button" text="confirm" color="#FEC004" textColor="#101010" className="rounded-lg w-48 mx-auto text-2xl uppercase font-bold" />
    </div>
  )

}
export default TransferConfirmation

