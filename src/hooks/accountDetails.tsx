import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getAccountName, getPublicAddress, getAccountBalance, getLoggedInStatus } from '../redux/slices/account';

// Hooks for getting store data
export const useGetAccountName = () => {
  const name = useAppSelector(getAccountName);
  return name;
}
export const useGetPublicAddress = () => {
  const address = useAppSelector(getPublicAddress);
  return address;
}
export const useGetAccountBalance = () => {
  const balance = useAppSelector(getAccountBalance);
  return balance;
}
export const useGetLoggedInStatus = () => {
  const isLoggedIn = useAppSelector(getLoggedInStatus);
  return isLoggedIn;
}

