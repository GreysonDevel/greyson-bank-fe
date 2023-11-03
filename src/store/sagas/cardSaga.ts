import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { Card } from '../slices/accountSlice';
import { blockCard, getUsersSelectedCard } from 'src/services/apiService';
import { cardSliceActions } from '../slices/cardSlice';

function* fetchUsersCardSaga(): Generator<any, void, AxiosResponse<Card>> {
  try {
    const response: AxiosResponse<Card> = yield call(getUsersSelectedCard);
    yield put(cardSliceActions.fetchCardSuccess(response.data));
  } catch (error: unknown) {
    yield put(cardSliceActions.fetchCardFailure(error as void));
  }
}

export function* watchFetchUsersCard() {
  yield takeLatest(cardSliceActions.fetchCard.type, fetchUsersCardSaga);
}

function* blockCardSaga(): Generator<any, void, AxiosResponse<void>> {
  try {
    const response: AxiosResponse<void> = yield call(blockCard);
    yield put(cardSliceActions.blockCardSuccess(true));
  } catch (error: unknown) {
    yield put(cardSliceActions.blockCardFailure(error as void));
  }
}

export function* watchBlockCard() {
  yield takeLatest(cardSliceActions.blockCard.type, blockCardSaga);
}
