import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Card } from './accountSlice';

const initialState: Card = {
  id: null,
  name: '',
  blocked: false,
  dateLocked: null,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    fetchCard(): void {
      console.log('initiated fetching card');
    },
    fetchCardSuccess(state, action: PayloadAction<Card>): void {
      state = action.payload;
    },
    fetchCardFailure(): void {
      console.log('fetching failure');
    },
    blockCard(): void {
      console.log('blocking of card is initiated');
    },
    blockCardSuccess(state, action: PayloadAction<boolean>): void {
      state.blocked = action.payload;
    },
    blockCardFailure(): void {
      console.log('blocking of a card failed');
    },
  },
});

export const cardSliceActions = cardSlice.actions;
export default cardSlice;
