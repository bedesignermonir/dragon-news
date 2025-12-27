import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Components/Pages/Home";

import CatergoriNews from "../Components/Pages/CatergoriNews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CatergoriNews></CatergoriNews>
            }
        ]
    },
    {
        path: '/*',
        element: <h1>Error 404 Go Back Home</h1>
    }
])

export default router;