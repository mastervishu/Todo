import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { toggleTheme } from "./features/theme/themeSlice";
import toast, { Toaster } from "react-hot-toast";
import { CiLight, CiDark } from "react-icons/ci";

interface Theme {
  themeStore: any;
  theme: boolean
}

function App() {
  const dispatch = useDispatch();
  const theme: boolean = useSelector((state: Theme) => state.themeStore.theme);

  const changeTheme = () => {
    toast.remove();
    dispatch(toggleTheme())
    toast.success(`Turn on ${!theme ? "light" : 'dark'} mode`, {
      position: "top-right",
    });
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(theme ? 'light' : 'dark');

  })

  return (
    <div className="w-full min-h-screen bg-white dark:bg-gray-900 duration-500">
      <button type="button" onClick={changeTheme} className="p-2 m-1 dark:invert transition-all ease-in-out delay-500 bg-transparent">
        {theme ? <CiDark size={36} /> : <CiLight size={36} />}
      </button>
      <div className="sm:w-full md:w-3/4 lg:w-1/2 h-full mx-auto py-5">
        <AddTodo />
        <Todo />
      </div>
      <Toaster />
    </div>
  )
}

export default App
