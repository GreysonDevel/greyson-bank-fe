import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  firstName: string;
  lastName: string;
  birthDate: Date | null;
}

const initialState: UserState = {
  id: null,
  firstName: '',
  lastName: '',
  birthDate: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUser(): void {
      console.log('initiated fetching user');
    },
    fetchUserSuccess(state, action: PayloadAction<UserState>) {
      state = action.payload;
    },
    fetchUserFailure(): void {
      console.log('fetching failure');
    },
  },
});

export const userSliceActions = userSlice.actions;
export type { UserState };
export default userSlice;
