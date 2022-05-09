import React, { useState, useEffect, useCallback } from "react"
import { SovrynLogo } from '../../../components/icons';
import Button from '../../../components/button/button'
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { useGetPublicAddress, useGetLoggedInStatus } from '../../../hooks/accountDetails'
import { setAddress, authenticate } from '../../../redux/slices/account';
import { login } from "../../../services/wallet";

interface Header {
  isLoggedIn: boolean
}

const Header: React.FunctionComponent<Header> = ({ isLoggedIn }) => {

  const walletPublicAddress = useGetPublicAddress();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    login().then((status) => {
      dispatch(authenticate(status));
    })
  }

  const handleLogout = () => {

  }

  return (
    <header className="flex justify-between items-center w-full bg-main-bg px-mgi sm:px-gi h-20">
      <SovrynLogo className="block w-52 h-20 -ml-mgi sm:-ml-gi" />
      {isLoggedIn ?
        <Button onClick={handleLogout} type="button" text={`${walletPublicAddress !== undefined && walletPublicAddress.slice(0, 4)}...${walletPublicAddress !== undefined && walletPublicAddress.slice(-4)}`} rightIcon="➔" rightIconClass="text-base leading-3 text-dark-yellow py-1 pl-2 ml-2 border-l-2 border-dark-yellow" color="#383838" textColor="#E9EAE9" className="rounded-xl text-sm capitalize font-bold" />
      :
        <Button onClick={handleLogin} type="button" text="engage wallet" outlined color="#FEC004" textColor="#FEC004" className="rounded-xl capitalize" />
      }
    </header>
  )

}
export default Header

