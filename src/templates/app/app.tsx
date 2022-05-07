import React, { useState, useEffect } from 'react';
import Header from './header/header';
import WelcomeScreen from './welcome-screen/welcome';
import TransferForm from '../transfer/form';
import TransferConfirmation from '../transfer/confirmation';
import TransferStatus from '../transfer/status';

function App() {

  // states & variables
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [transferDetails, setTransferDetails] = useState({});

  // functions & handlers
  const handleLogIn = (state: boolean) => {
    setHasLoggedIn(state);
  }
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
    <div className="block bg-dark-gray h-screen w-full overflow-scroll pb-10">
      <Header isLoggedIn={hasLoggedIn} onLogin={handleLogIn} />
      <main className="block mt-mgi p-mgi mx-auto max-w-md border-0 border-border rounded-3xl sm:border sm:p-gi sm:mt-gi">
        { hasLoggedIn ? 
          <>
            { hasSubmitted === false && <TransferForm onSubmit={(e:any) => handleFormSubmit(e)} /> }
            { hasConfirmed === false && hasSubmitted && <TransferConfirmation transferDetails={transferDetails} onConfirm={handleTransferConfirm} /> }
            { hasConfirmed && <TransferStatus onSend={handleTransferSent} /> }
          </>
          :
          <WelcomeScreen onLogin={handleLogIn} />
        }
      </main>
    </div>
  );
}

export default App;
