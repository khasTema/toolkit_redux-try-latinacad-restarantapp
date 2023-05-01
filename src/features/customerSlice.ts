import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface customerState {
    value: Customer[];
    // the type is array of Customer objects
}

interface addFoodToCustomerPaylod {
    food: string;
    id: string;
}

interface Customer {
    id: string;
    name: string;
    food: string[];
     
}

const initialState: customerState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<addFoodToCustomerPaylod>) => {
            state.value.forEach((customer => {
                if(customer.id === action.payload.id){
                    customer.food.push(action.payload.food)
                }
            }))
        }
    }
})

export const {addCustomer, addFoodToCustomer} = customerSlice.actions

export default customerSlice.reducer
