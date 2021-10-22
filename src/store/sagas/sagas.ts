import { put, select, all, takeLatest, call } from 'redux-saga/effects'
import { getProfiles } from '../../data-sources/user';
import { Profile } from '../../types/store';
import { selectUserId } from '../features/user/user-selector';
import { addProfile, openProfile, setProfiles } from '../features/user/user-slice'

// generator functions has some issues with typescript in general
export function* setInitialProfiles(): any {
    const userId = yield select(selectUserId);
    const response = yield call(getProfiles, userId);
    yield put(setProfiles(response));

}

export function* watchOpenProfile() {
    yield takeLatest(openProfile, setInitialProfiles);
}

export default function* rootSaga() {
    yield all([
        watchOpenProfile(),
    ])
}