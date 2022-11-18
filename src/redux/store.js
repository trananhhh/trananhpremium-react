import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
    reducer: {
        modal: modalReducer,
        ui: uiReducer,
    },
});
