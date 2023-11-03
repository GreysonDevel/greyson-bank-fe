import axios, { AxiosResponse } from 'axios';
// import { useSelector } from "react-redux";
// import { TRootState } from 'src/store';
import { UserState } from '../store/slices/userSlice';
import { Account, AccountsState } from '../store/slices/accountsSlice';
import { Card, Transaction } from 'src/store/slices/accountSlice';
// const apiUrl = `${process.env.API_URL}`;

// GET REQUESTS
// fetching user
export const getUserData = async (): Promise<AxiosResponse<UserState>> => {
  try {
    const response: AxiosResponse<UserState> = await axios.get('');
    return response;
  } catch (error: unknown) {
    throw new Error('Failed to fetch user data');
  }
};

// fetching accounts for the user

export const getUsersAccounts = async (): Promise<
  AxiosResponse<AccountsState>
> => {
  //use the user id acquired below in the url of the get request
  // const userId = useSelector((store: TRootState) => store.user.id)
  try {
    const response: AxiosResponse<AccountsState> = await axios.get('');
    return response;
  } catch (error: unknown) {
    throw new Error('Failed to fetch users accounts information');
  }
};

// fetching detail of selected account for the user
// the get should be specified by the passed in the account id
// not sure if this will work as planned
// accountId: number paramater needs to be added
export const getUsersSelectedAccount = async (): Promise<
  AxiosResponse<Account>
> => {
  try {
    const response: AxiosResponse<Account> = await axios.get('');
    return response;
  } catch (error: unknown) {
    throw new Error('Failed to fetch detailed info about that account');
  }
};

// fetching detail of selected card
// accountId: number paramater needs to be added
export const getUsersSelectedCard = async (): Promise<AxiosResponse<Card>> => {
  try {
    const response: AxiosResponse<Card> = await axios.get('');
    return response;
  } catch (error: unknown) {
    throw new Error('Failed to fetch detailed info abou that card');
  }
};

// // POST REQUESTS
// // add transaction parameter when the type is created
export const postTransaction = async (
  transaction: Transaction
): Promise<void> => {
  try {
    await axios.post('', transaction);
  } catch (error: unknown) {
    throw new Error('Failed to create a new transaction');
  }
};

// // PUT REQUESTS
// // add card paramater when the type is created and can be used
export const blockCard = async (): Promise<void> => {
  try {
    await axios.put('');
  } catch (error: unknown) {
    throw new Error('Failed to block that card');
  }
};
