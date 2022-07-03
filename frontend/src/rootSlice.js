import { createSlice } from "@reduxjs/toolkit";

export const chargesSlice = createSlice({
    name: "charge",
    initialState: {
        charges: [],
        eligibility: [],
        pages: 2,
        currentPage: 0
    },
    reducers: {
        addCharges: (state, action) => {
            state.charges = action.payload.charges
        },

        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        nextPage: (state, action) => {
            if (state.currentPage < state.pages)
            state.currentPage += 1;
            },
        lastPage: (state, action) => {
            if (state.currentPage > 0)
                state.currentPage -= 1;
            },

    }
});
export const {addCharges, addResults, setPage,addPage,nextPage,lastPage} = chargesSlice.actions;
export const reducer = chargesSlice.reducer;
