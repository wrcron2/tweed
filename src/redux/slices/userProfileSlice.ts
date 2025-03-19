import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'


type UserProfileType = {
  name: string
  imageUrl: string
}

interface userProfileState {
  name: string
  imageUrl: string
  joined: string
  role: string
  email: string
}

const initialState: userProfileState = {
  name: "N/R",
  imageUrl: "N/A",
  joined: "2025",
  role: "developer",
  email: "test@test.com"
}

export const userProfileSlice = createSlice({
  name: 'userProfileSlice',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfileType>) => {
      state.name = action.payload.name;
      state.imageUrl = action.payload.imageUrl;
    }
  
  
  }
})

export const { setProfile } = userProfileSlice.actions

// Selectors 
export const profileSelector = (state: RootState) => state.userProfile

export default userProfileSlice.reducer