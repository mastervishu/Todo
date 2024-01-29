import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { deleteTodo } from "../features/todo/todoSlice";
import toast from "react-hot-toast";


interface Todos {
    todoStore: any;

}

const Todo = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: Todos) => state.todoStore.todos);

    const handleDelete = async (id: string) => {
        toast.remove();
        await toast.promise(new Promise((resolve,) => setTimeout(resolve, 1500)), {
            loading: 'Deleting...',
            success: <b>Todo deleted!</b>,
            error: <b>Could not delete.</b>,
        });
        dispatch(deleteTodo(id));

    }

    return (
        <div className="w-full h-[82vh] my-2 p-2 overflow-auto">
            {todos && todos.length > 0 ? (
                todos.map((todo: any) => {
                    return (
                        <div className="relative flex items-center p-4 m-2 bg-white dark:bg-gray-700 dark:text-white shadow rounded" key={todo.id}>
                            <p className="mt-2 text-gray-600 dark:text-white">{todo.text}</p>
                            <div className="absolute right-0 mx-2 grid grid-cols-2 gap-4 rounded">
                                <button type="button" onClick={() => handleDelete(todo.id)}><MdDelete size="25" /></button>
                            </div>
                        </div>
                    )
                })
            ) : (
                <h1 className="text-center">No Todo Found!</h1>
            )}
        </div>
    );
}


export default Todo;
