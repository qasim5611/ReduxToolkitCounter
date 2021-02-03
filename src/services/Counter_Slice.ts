import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type CounterState = {
    counterNumber: number
}

let initialState: CounterState = {
    counterNumber: 0,
};


const counterSlice = createSlice({
    name: 'Counter',
    initialState: initialState,
    reducers: {
        increment(state, action: PayloadAction<number>) {
            state.counterNumber = state.counterNumber + action.payload
            console.log('Inc check value of action payload' + action.payload);
        },
        decrement(state, action: PayloadAction<number>) {
            state.counterNumber = state.counterNumber - action.payload
            console.log('EDec check value of action payload' + action.payload);
        },
        mutiplyby(state, action: PayloadAction<number>) {
            state.counterNumber = state.counterNumber * action.payload
            console.log('multiply check value of action payload' + action.payload);
        }
    }
});

export const { increment, decrement, mutiplyby } = counterSlice.actions;

export default counterSlice.reducer
