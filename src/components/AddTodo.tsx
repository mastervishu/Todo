import { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const AddTodo = () => {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (ev: any) => {
        ev.preventDefault();
        toast.remove();
        await toast.promise(new Promise((resolve,) => setTimeout(resolve, 1500)), {
            loading: 'Saving...',
            success: <b>Todo saved!</b>,
            error: <b>Could not save.</b>,
        });
        dispatch(addTodo(todo));
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Todo</label>
                <div className="relative">
                    <input
                        type="text"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Todo"
                        autoComplete="off"
                        required
                    />

                    <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;
