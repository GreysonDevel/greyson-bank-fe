import { createSlice } from '@reduxjs/toolkit';

interface modalState {
  isOpen: boolean;
}

const initialState: modalState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const modalActions = modalSlice.actions;
export default modalSlice;
