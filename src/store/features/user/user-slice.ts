import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Profile, RootState, UserState } from '../../../types/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserState = {
    id: 0,
    profiles: [
        {
            id: 0,
            name: 'test1',
            imageUrl: ''
        },
        {
            id: 1,
            name: 'test2',
            imageUrl: ''
        },
        {
            id: 2,
            name: 'test3',
            imageUrl: ''
        },
        {
            id: 3,
            name: 'test10',
            imageUrl: ''
        }
    ]
}

const usersSlice = createSlice({
  name: 'userss',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<Profile>) => {
        const profiles = [...state.profiles];
        profiles.push(action.payload);
        return {
            ...state,
            profiles
        }
    },
    removeProfile: (state, action: PayloadAction<number>) => {
        return {
            ...state,
            profiles: state.profiles.filter(profile => profile.id !== action.payload)
        }
    },
  },
})

export const { addProfile, removeProfile } = usersSlice.actions

export default usersSlice.reducer