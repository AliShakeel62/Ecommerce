import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// The store holds the state of your app
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store; 