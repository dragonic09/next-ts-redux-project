import { UserState } from '../../../../types/store';
import reducer, { addProfile, removeProfile } from '../user-slice'

const initialState: UserState = {
    id: 0,
    profiles: [
        {
            id: 0,
            name: 'test1',
            imageUrl: ''
        }
    ]
}

describe('Reducer', () => {
    let prevState: UserState = {
        id: 0,
        profiles: []
    }
    beforeEach(() => {
        prevState = {
            ...initialState,
            profiles: [...initialState.profiles]
        }
    })
    test('addProfile: should add a new profile to state', () => {
        const newProfile = {
            id: 1,
            name: 'test2',
            imageUrl: ''
        }
        const expectState: UserState = {
            ...initialState,
            profiles: [...initialState.profiles, newProfile]
        }
        expect(reducer(prevState, addProfile(newProfile))).toEqual(expectState)
    })

    test('removeProfile: should remove a profile to state', () => {
        const expectState: UserState = {
            ...initialState,
            profiles: []
        }
        expect(reducer(prevState, removeProfile(0))).toEqual(expectState)
    })
});