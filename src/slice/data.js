import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    successData: false,
    getResponse: null,
    error: null
}

export const dataSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getDataStart: (state) => {
            state.isLoading = true
        },

        getDataSuccess: (state, action) => {
            state.isLoading = false
            state.successData = true
            state.getResponse = action.payload
        },

        getDataFailure: (state) => {
            state.isLoading = false
            state.error = ("error")
        }
    }
})

export const { getDataStart, getDataSuccess, getDataFailure} = dataSlice.actions
export default dataSlice.reducer