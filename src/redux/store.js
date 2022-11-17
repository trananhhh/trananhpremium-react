import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
});
