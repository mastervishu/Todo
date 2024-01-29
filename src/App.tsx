import { useDispatch, useSelector } from "react-redux"
import { toggleTheme } from "./features/theme/themeSlice";
import { useEffect } from "react";

interface themeInterfae {
  theme: boolean
}

function App() {
  const dispatch = useDispatch();
  const theme: boolean = useSelector((state: themeInterfae) => state.theme);

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark');
    document.querySelector('html')?.classList.add(theme ? 'light' : 'dark');
  })

  return (
    <div className="w-full min-h-screen bg-gray-200 dark:bg-gray-900 duration-500">
      <button type="button" className="bg-green-600" onClick={() => dispatch(toggleTheme())}>Change</button>
    </div>
  )
}

export default App
