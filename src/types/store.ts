import { store } from "../store"

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export interface UserState {
    id: number;
    profiles: Profile[];
}

export interface Profile {
    id: number;
    name: string;
    imageUrl: string;
}