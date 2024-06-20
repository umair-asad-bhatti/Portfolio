
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import ProjectsPage from "./pages/ProjectsPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/projects',
        element: <ProjectsPage />,

      }
    ]
  },
]);
export default function App() {

  return (
    <RouterProvider router={router} />
  )
}





