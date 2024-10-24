import Error from "./pages/Error";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Series from "./pages/Series";
import Bookmark from "./pages/Bookmark";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/movies',
    element: <Movie />,
    errorElement: <Error />
  },
  {
    path: '/series',
    element: <Series />,
    errorElement: <Error />
  },
  {
    path: '/bookmarks',
    element: <Bookmark />,
    errorElement: <Error />
  },

])