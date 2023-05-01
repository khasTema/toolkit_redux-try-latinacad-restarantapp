import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
    // the type is array of strings
}

const initialState: ReservationState = {
    value: []
} 

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addResesrvation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action: PayloadAction<number>) => {
            state.value.splice(action.payload, 1)
        }
    }
})

export const {addResesrvation, removeReservation} = reservationSlice.actions

export default reservationSlice.reducer
