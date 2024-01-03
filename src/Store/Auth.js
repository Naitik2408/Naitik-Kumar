import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalStatus: false,
  companyNameBox:false,
  companyName:null
}

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalStatus =true
    },
    closeModal: (state) => {
      state.modalStatus =false
    },
  },
})

export const { openModal, closeModal} = authSlice.actions

export default authSlice.reducer