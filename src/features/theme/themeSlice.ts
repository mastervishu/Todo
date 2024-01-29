import { Tuple, createSlice } from "@reduxjs/toolkit";

interface Theme {
    theme: boolean
}

const initialState = {
    theme: true ,
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme
            localStorage.setItem("theme", JSON.stringify(state.theme))
        },
    }
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;