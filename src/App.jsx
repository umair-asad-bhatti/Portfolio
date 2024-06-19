
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
]);
export default function App() {

  return (
    <RouterProvider router={router} />
  )
}




