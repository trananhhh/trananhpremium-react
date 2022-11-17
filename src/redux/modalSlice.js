import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalOpen: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeModal: (state) => {
            state.isModalOpen = false;
        },
        openModal: (state) => {
            state.isModalOpen = true;
        },
    },
});

export const { closeModal, openModal } = modalSlice.actions;

export default modalSlice.reducer;
