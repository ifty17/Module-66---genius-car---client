import Main from "../../Layout/Main";
import Checkout from "../../pages/Home/Checkout/Checkout";
import Home from "../../pages/Home/Home/Home";
import Orders from "../../pages/Home/Orders/Orders";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");

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
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader: ({params}) => fetch (`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <Orders></Orders>
            },
        ]
    }
]);



export default router;