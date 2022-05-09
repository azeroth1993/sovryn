# Crypto Transfer App

A crypto transfer application for sending "eRTH" and "WEENUS" tokens to another public wallet.


## Technologies used

- React
- Tailwind.CSS
- TypeScript
- Web 3.0
- Redux-toolkit
- Creat-react-app


## Current functionalities

- Welcome screen before login
- Get user's wallet's "public address" and "eth balance"
- Balance Check to only allow sending of amounts you have available in the wallet
- Wallet public address validation (based on ether address pattern right now)
- Quick amount selection buttons
- Fully responsive


## Notes

- App doesn't actually send anything yet. 
- The log-out button currently doesn't have any functionality. The reason for it is that MetaMask apparently doesn't
allow disconnecting wallets from the app and it has to be done by the user (considered a security feature).
But it's the first time i'm making a web 3.0 app so, i might be wrong :p

## Screenshots

![Crypto Transfer App](/public/welcome-screen.jpg)
![Crypto Transfer App](/public/transfer-form.jpg)
![Crypto Transfer App](/public/confirmation-screen.jpg)
![Crypto Transfer App](/public/transfer-status.jpg)
