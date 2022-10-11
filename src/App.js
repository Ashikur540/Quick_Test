import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage';
import Quiz from './Components/Quiz/Quiz';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/topics",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/topics/:id",
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
          element: <Quiz></Quiz>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
          errorElement: <ErrorPage></ErrorPage>
        },


      ]
    },
    {
      path: "/blogs",
      element: <Blogs></Blogs>,
      errorElement: <ErrorPage></ErrorPage>
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
