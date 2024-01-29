import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/theme/themeSlice";
import todoSlice from "../features/todo/todoSlice";

const store = configureStore({
    reducer: {
        themeStore: themeSlice,
        todoStore: todoSlice
    }
})
export default store;