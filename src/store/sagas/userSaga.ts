import { call, put, takeLatest } from 'redux-saga/effects';
import { UserState, userSliceActions } from '../slices/userSlice';
import { getUserData } from '../../services/apiService';
import { AxiosResponse } from 'axios';

function* fetchUserSaga(): Generator<any, void, AxiosResponse<UserState>> {
  try {
    const response: AxiosResponse<UserState> = yield call(getUserData);
    yield put(userSliceActions.fetchUserSuccess(response.data));
  } catch (error: unknown) {
    yield put(userSliceActions.fetchUserFailure(error as void));
  }
}

export function* watchFetchUser() {
  yield takeLatest(userSliceActions.fetchUser.type, fetchUserSaga);
}
