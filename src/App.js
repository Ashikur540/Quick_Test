import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import ErrorPage from './Components/ErrorPage';
import Topics from './Components/Topics/Topics';
import Statistics from './Components/Statistics/Statistics';
import Blogs from './Components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Topics></Topics>,
          errorElement: <ErrorPage></ErrorPage>
        },
        {
          path: "/topics",
          element: <Topics></Topics>,
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
