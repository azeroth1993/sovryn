import React from "react"
import { SovrynLogo } from '../../../components/icons';
import Button from '../../../components/button/button'
import { useGetPublicAddress, } from '../../../hooks/accountDetails'

interface Header {
  onLogin: (state: boolean) => void,
  isLoggedIn: boolean
}

const Header: React.FunctionComponent<Header> = ({ onLogin, isLoggedIn }) => {

  const walletPublicAddress = useGetPublicAddress();

  return (
    <header className="flex justify-between items-center w-full bg-main-bg px-mgi sm:px-gi h-20">
      <SovrynLogo className="block w-52 h-20 -ml-mgi sm:-ml-gi" />
      {isLoggedIn ?
        <Button onClick={() => onLogin(false)} type="button" text={`${walletPublicAddress.slice(0, 4)}...${walletPublicAddress.slice(-4)}`} rightIcon="➔" rightIconClass="text-base leading-3 text-dark-yellow py-1 pl-2 ml-2 border-l-2 border-dark-yellow" color="#383838" textColor="#E9EAE9" className="rounded-xl text-sm capitalize font-bold" />
      :
        <Button onClick={() => onLogin(true)} type="button" text="engage wallet" outlined color="#FEC004" textColor="#FEC004" className="rounded-xl capitalize" />
      }
    </header>
  )

}
export default Header

