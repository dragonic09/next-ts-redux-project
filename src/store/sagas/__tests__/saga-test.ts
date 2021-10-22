import { setInitialProfiles } from "../sagas";
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { selectUserId } from "../../features/user/user-selector";
import { getProfiles } from "../../../data-sources/user";
import { setProfiles } from "../../features/user/user-slice";

describe('sagas', () => {
    describe('setInitialProfiles', () => {
        test('should call effect in a correct order',() => {
            testSaga(setInitialProfiles)
                .next()
                .select(selectUserId)
                .next()
                .call(getProfiles, undefined)
                .next()
                .put(setProfiles());
        });
    });
});