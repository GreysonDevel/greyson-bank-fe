import { call, put, takeLatest } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { Account, accountSliceActions } from '../slices/accountsSlice';
import { getUsersAccounts } from 'src/services/apiService';

function* fetchUsersAccountsSaga(): Generator<
  any,
  void,
  AxiosResponse<Array<Account>>
> {
  try {
    const response: AxiosResponse<Array<Account>> = yield call(
      getUsersAccounts
    );
    yield put(accountSliceActions.fetchAccountsSuccess(response.data));
  } catch (error: unknown) {
    yield put(accountSliceActions.fetchAccountsFailure(error as void));
  }
}

export function* watchFetchUsersAccounts() {
  yield takeLatest(
    accountSliceActions.fetchAccounts.type,
    fetchUsersAccountsSaga
  );
}
