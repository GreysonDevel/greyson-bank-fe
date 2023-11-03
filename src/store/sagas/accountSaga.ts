import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  AccountState,
  Transaction,
  accountSliceActions,
} from '../slices/accountSlice';
import { AxiosResponse } from 'axios';
import {
  getUsersSelectedAccount,
  postTransaction,
} from 'src/services/apiService';
import { PayloadAction } from '@reduxjs/toolkit';

function* fetchUsersAccountSaga(): Generator<
  any,
  void,
  AxiosResponse<AccountState>
> {
  try {
    const response: AxiosResponse<AccountState> = yield call(
      getUsersSelectedAccount
    );
    yield put(accountSliceActions.fetchAccountSuccess(response.data));
  } catch (error: unknown) {
    yield put(accountSliceActions.fetchAccountFailure(error as void));
  }
}

export function* watchFetchUsersAccount() {
  yield takeLatest(
    accountSliceActions.fetchAccount.type,
    fetchUsersAccountSaga
  );
}

function* postTransactionSaga(
  action: PayloadAction<Transaction>
): Generator<any, void, AxiosResponse> {
  try {
    yield call(postTransaction, action.payload);
    yield put(accountSliceActions.postTransactionSuccess(action.payload));
  } catch (error: unknown) {
    yield put(accountSliceActions.postTransactionFailure());
  }
}

export function* watchPostTransaction() {
  yield takeEvery(
    accountSliceActions.postTransaction.type,
    postTransactionSaga
  );
}
