import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  sharedData: number | null;
}

const initialState: CounterState = {
  value: 0,
  sharedData: 5,
};

// Slice
const parentSlice = createSlice({
  name: 'parent',
  initialState,
  reducers: {
    incrementParent: state => {
      console.log('aaa', state.value);
      state.value += 1;
    },
    setSharedData: (state, action) => {
      state.sharedData = action.payload;
    },
  },
});

export const {incrementParent, setSharedData} = parentSlice.actions;
export default parentSlice.reducer;
