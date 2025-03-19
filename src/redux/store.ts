import { configureStore } from '@reduxjs/toolkit'
import userProfileSlice from './slices/userProfileSlice'
// ...

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch