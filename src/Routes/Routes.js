import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
]);
export default router;