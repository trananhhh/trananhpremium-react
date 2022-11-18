import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCountUp: false,
    isLoading: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        renderCountUp: (state) => {
            state.isCountUp = true;
        },
        loading: (state) => {
            state.isLoading = true;
            // setTimeout(() => this.setLoaded(), 2000);
        },
        setLoaded: (state) => {
            state.isLoading = false;
        },
    },
});

export const { renderCountUp, loading } = uiSlice.actions;

export default uiSlice.reducer;
