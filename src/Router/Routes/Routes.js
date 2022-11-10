import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Home/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Service from "../../pages/Home/Service/Service";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import MyReview from "../../pages/Special/MyReview";
import AddServices from "../../pages/Special/AddServices";


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
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/myreview',
                element: <MyReview></MyReview>
            },
            {
                path: '/addservices',
                element: <AddServices></AddServices>
            }
        ]
    }
])

export default router;