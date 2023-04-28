import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import News from "../pages/News/News";


const Router = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/category/:id`,
        element: <Category />,
        loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
      },
      
    ],
  },
  {
    path: `/news`,
    element: <NewsLayout />,
    children: [
      {
        path: `:id`,
        element: <News />,
        loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);

export default Router;
