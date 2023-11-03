import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Transaction {
  id: number;
  amount: number;
  creditor: string;
  debtor: string;
  dateCreated: Date;
  dateExecuted: Date;
}

interface Card {
  id: number | null;
  name: string;
  blocked: boolean;
  dateLocked: Date | null;
}

interface AccountState {
  id: number | null;
  name: string;
  IBAN: string;
  balance: number | null;
  currency: string;
  transactions: Array<Transaction>;
  cards: Array<Card>;
}

const initialState: AccountState = {
  id: null,
  name: '',
  IBAN: '',
  balance: null,
  currency: '',
  transactions: [],
  cards: [],
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    fetchAccount(): void {
      console.log('initiated fetching account');
    },
    fetchAccountSuccess(state, action: PayloadAction<AccountState>): void {
      state = action.payload;
    },
    fetchAccountFailure(): void {
      console.log('fetching failure');
    },
    postTransaction(): void {
      console.log('transaction post initiated');
    },
    postTransactionSuccess(state, action: PayloadAction<Transaction>): void {
      state = {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    },
    postTransactionFailure(): void {
      console.log('Failed to post transaction');
    },
  },
});

export const accountSliceActions = accountSlice.actions;
export type { AccountState, Card, Transaction };
export default accountSlice;
