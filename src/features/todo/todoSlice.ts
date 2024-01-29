import { createSlice, nanoid } from "@reduxjs/toolkit";

interface Todo {
    id: string;
    text: string;
}

const initialState = {
    todos: JSON.parse(localStorage.getItem('todos') || "[]") as Todo[]
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ id: nanoid(), text: action.payload });
            localStorage.setItem('todos', JSON.stringify(state.todos));
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;