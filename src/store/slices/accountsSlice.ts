import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Account {
  id: number;
  name: string;
  balance: number;
  currency: string;
}

interface AccountsState {
  accounts: Array<Account>;
  loading: boolean;
  error: string | null;
}

const initialState: AccountsState = {
  accounts: [],
  loading: false,
  error: null,
};

const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    fetchAccounts(): void {
      console.log('initiated fetching accounts');
    },
    fetchAccountsSuccess(state, action: PayloadAction<Array<Account>>) {
      state.accounts = action.payload;
    },
    fetchAccountsFailure(): void {
      console.log('fetching failure');
    },
  },
});

export const accountSliceActions = accountsSlice.actions;
export type { Account, AccountsState };
export default accountsSlice;
