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
        },
        setLoaded: (state) => {
            state.isLoading = false;
        },
    },
});

export const { renderCountUp, loading, setLoaded } = uiSlice.actions;

export default uiSlice.reducer;
