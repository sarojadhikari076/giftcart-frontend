import { BasicDetails } from '@/types/user'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Modal = 'filter' | 'cart' | 'navbar' | 'none'

type AuthState = {
  isLoading: boolean
  isLoggedIn: boolean
  user: BasicDetails | null
}

export type AppState = {
  utils: {
    modals: Modal[]
  }
  auth: AuthState
}

const initialState: AppState = {
  utils: {
    modals: ['none']
  },
  auth: {
    isLoading: false,
    isLoggedIn: false,
    user: null
  }
}

const appSlice = createSlice({
  name: 'fresh-harvest-app',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<Modal>) {
      state.utils.modals.push(action.payload)
    },
    closeModal(state) {
      state.utils.modals.pop()
    },
    updateUser(state, action: PayloadAction<AuthState>) {
      state.auth = action.payload
    },
    logout: (state) => {
      state.auth.isLoggedIn = false
      state.auth.user = null
    }
  }
})

export const { openModal, closeModal, logout, updateUser } = appSlice.actions

export default appSlice.reducer
