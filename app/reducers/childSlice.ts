import {createSlice} from '@reduxjs/toolkit';
import parentStore from '../store/parentStore';
import childStore from '../store/childStore';

export interface CounterState {
  value: number;
  sharedDataFromParent: number | null;
}

const initialState: CounterState = {
  value: 0,
  sharedDataFromParent: parentStore.getState().parent.sharedData,
};

const updateSharedDataFromParent = state => {
  childStore.dispatch(
    setSharedDataFromParent(parentStore.getState().parent.sharedData),
  );
};

parentStore.subscribe(() => {
  updateSharedDataFromParent(childSlice);
});

// Slice
const childSlice = createSlice({
  name: 'child',
  initialState,
  reducers: {
    incrementChild: state => {
      state.value += 1;
    },
    setSharedDataFromParent: (state, action) => {
      state.sharedDataFromParent = action.payload;
    },
  },
});

export const {incrementChild, setSharedDataFromParent} = childSlice.actions;
export default childSlice.reducer;
