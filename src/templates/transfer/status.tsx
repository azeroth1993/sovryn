import React from "react"
import Button from "../../components/button/button"
import { CheckMark } from "../../components/icons"

interface TransferStatus {
  onSend: () => void,
}

const TransferStatus: React.FunctionComponent<TransferStatus> = ({ onSend }) => {

  return (
    <div className="text-cream capitalize text-center">
      <p className="block w-full text-3xl">transaction details</p>
      <CheckMark className="fill-white w-16 p-2 mx-auto my-7 rounded-full bg-dark-green" />
      <span className="text-2xl italic">status : {'pending'}</span>
      <div className="flex justify-center items-center w-full mt-8 mb-12 px-2">
        <span className="mr-2">tx hash :</span>
        <span className="text-dark-yellow">{'701FdCc9Db05d5AD0'}</span>
      </div>
      <Button onClick={onSend} type="button" text="close" outlined color="#FEC004" textColor="#FEC004" className="rounded-lg w-48 mx-auto text-2xl uppercase font-bold" />
    </div>
  )
}
export default TransferStatus

