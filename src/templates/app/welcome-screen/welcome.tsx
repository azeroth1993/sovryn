import React from "react"
import Button from '../../../components/button/button'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setAddress, authenticate } from '../../../redux/slices/account';
import { login, getWalletAddress, getWalletBalance } from "../../../services/wallet";

interface WelcomeScreen {

}

const WelcomeScreen: React.FunctionComponent<WelcomeScreen> = ({  }) => {

  const dispatch = useAppDispatch();
  const handleLogin = () => {
    login().then((status) => {
      dispatch(authenticate(status !== null));
    })
  }

  return (
    <div className="">
      <img src="welcome.png" alt="welcome to sovryn" className="rounded-lg mx-auto w-full" width={366} height={401} />
      <p className="block w-full text-lg text-center text-cream font-bold mt-5 mb-7">Please connect your Meta Mask wallet</p>
      <Button onClick={handleLogin} type="button" text="engage wallet" color="#FEC004" textColor="#101010" className="rounded-lg w-full text-xl capitalize font-bold" />
    </div>
  )
}

export default WelcomeScreen
