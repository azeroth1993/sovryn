import React, { useState, useEffect, useMemo } from 'react';
import Header from './header/header';
import WelcomeScreen from './welcome-screen/welcome';
import TransferForm from '../transfer/form';
import TransferConfirmation from '../transfer/confirmation';
import TransferStatus from '../transfer/status';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { getLoggedInStatus, setAddress, setBalance } from '../../redux/slices/account';
import { useGetLoggedInStatus } from '../../hooks/accountDetails'
import { login, walletStatus, getWalletAddress, getWalletBalance } from "../../services/wallet";

function App() {

  // states & variables
  const [hasLoggedIn, setHasLoggedIn] = useState(useGetLoggedInStatus());
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [transferDetails, setTransferDetails] = useState({});
  const dispatch = useAppDispatch();
  
  const setAccountDetails = async () => {
    try {
      dispatch(setAddress(await getWalletAddress()));
      const walletBalance = await getWalletBalance();
      dispatch(setBalance(Number(walletBalance.slice(0, -18))));
    } catch(err) {
      console.log(err);
    }
  }  

  // functions & handlers
  useEffect(() => {
    walletStatus().then(x => {
      setAccountDetails();
      setHasLoggedIn(x);
    });
  }, [useAppSelector(getLoggedInStatus)])

  const handleFormSubmit = (details: object) => {
    setTransferDetails(details);
    setHasSubmitted(true);
  }
  const handleTransferConfirm = () => {
    setHasConfirmed(true);
  }
  const handleTransferSent = () => {
    setHasSubmitted(false);
    setHasConfirmed(false);
  }

  // returned elements
  return (
    <div className="block bg-dark-gray h-screen w-full overflow-y-scroll pb-10">
      <Header isLoggedIn={hasLoggedIn} />
      <main className="block mt-mgi p-mgi mx-auto max-w-md border-0 border-border rounded-3xl sm:border sm:p-gi sm:mt-gi">
        { hasLoggedIn ? 
          <>
            { hasSubmitted === false && <TransferForm onSubmit={(e:any) => handleFormSubmit(e)} /> }
            { hasConfirmed === false && hasSubmitted && <TransferConfirmation transferDetails={transferDetails} onConfirm={handleTransferConfirm} /> }
            { hasConfirmed && <TransferStatus onSend={handleTransferSent} /> }
          </>
          :
          <WelcomeScreen />
        }
      </main>
    </div>
  );
}

export default App;
