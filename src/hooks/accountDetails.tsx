import React from "react"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { getAccountName, getPublicAddress, getAccountBalance } from '../redux/slices/account';

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

