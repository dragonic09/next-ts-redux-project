import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { Profile, RootState, UserState } from '../../../types/store'

// Define a type for the slice state

// Define the initial state using that type
const initialState: UserState = {
    id: 0,
    profiles: []
}

const usersSlice = createSlice({
  name: 'users',
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
    openProfile: (state) => {
        return {
            ...state
        }
    }, 
    setProfiles: (state, action: PayloadAction<Profile[] | undefined>) => {
        return {
            ...state,
            profiles: action.payload ? [...action.payload] : []
        }
    }
  },
})

export const { addProfile, removeProfile, openProfile, setProfiles } = usersSlice.actions

export default usersSlice.reducer