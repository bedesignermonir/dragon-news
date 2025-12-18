import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>This is Home Page</h1>
    },
    {
        path: '/*',
        element: <h1>Error 404 Go Back Home</h1>
    }
])

export default router;