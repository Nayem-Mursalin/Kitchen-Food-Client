import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Home/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import Service from "../../pages/Home/Service/Service";
import ServiceDetails from "../../pages/Home/Service/ServiceDetails";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";
import MyReview from "../../pages/Special/MyReview";
import AddServices from "../../pages/Special/AddServices";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import UpdateReview from "../../pages/Special/UpdateReview";


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
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
            },
            {
                path: '/myreview/:id',
                else: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>
            },
            {
                path: '/addservices',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://kitchen-food-server-nayem-mursalin.vercel.app/services/${params.id}`)
            }
        ]
    }
])

export default router;