import {configureStore} from '@reduxjs/toolkit';
import parentReducer from '../reducers/parentSlice';

// Create parent store
const parentStore = configureStore({
  reducer: {
    parent: parentReducer,
  },
});

export default parentStore;

export type ParentRootState = ReturnType<typeof parentStore.getState>;
