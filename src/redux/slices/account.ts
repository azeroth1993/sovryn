import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store/store';

export interface AccountState {
  name: string,
  publicAddress: string,
  accountBalance: {
    token: string,
    amount: number
  }[],
  isLoggedIn: boolean
}

const initialState: AccountState = {
  name: 'Account 1',
  publicAddress: '',
  accountBalance: [
    { token: 'reth', amount: 0 },
    { token: 'weenus', amount: 20000 },
  ],
  isLoggedIn: false
};

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.publicAddress = action.payload;
    },
    setBalance: (state, action: PayloadAction<number>) => {
      state.accountBalance[0].amount = action.payload;
    },
    addBalance: (state, action: PayloadAction<any>) => {
      state.accountBalance.filter((x: any) => x.token === action.payload.token)[0].amount += action.payload.amount;
    },
    reduceBalance: (state, action: PayloadAction<any>) => {
      state.accountBalance.filter((x: any) => x.token === action.payload.token)[0].amount -= action.payload.amount;
    },
    authenticate: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
      console.log('done!', action.payload, state.isLoggedIn);
    },
  },
});

export const { setAddress, setBalance, addBalance, reduceBalance, authenticate } = accountSlice.actions;

export const getAccountName = (state: RootState) => state.account.name;
export const getPublicAddress = (state: RootState) => state.account.publicAddress;
export const getAccountBalance = (state: RootState) => state.account.accountBalance;
export const getLoggedInStatus = (state: RootState) => state.account.isLoggedIn;

export default accountSlice.reducer;
