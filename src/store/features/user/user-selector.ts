import { RootState } from "../../../types/store";

// Other code such as selectors can use the imported `RootState` type
export const selectProfile = (state: RootState, profileId: number) => state.user.profiles.find(profile => profile.id === profileId)
export const getProfiles = (state: RootState) => state.user.profiles
export const selectUserId = (state: RootState) => state.user.id