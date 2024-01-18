// childStore.js
import {configureStore} from '@reduxjs/toolkit';
import childReducer from '../reducers/childSlice';

// Create child store
const childStore = configureStore({
  reducer: {
    child: childReducer,
  },
});

export default childStore;

export type NestedRootState = ReturnType<typeof childStore.getState>;
