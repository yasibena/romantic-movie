
import { RouterProvider } from "react-router-dom"
import { router } from "./routes";
import { MovieProvider } from "./context/movieContext";
import './App.css'

function App() {


  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  )
}

export default App
