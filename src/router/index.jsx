import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/app/landing-page/LandingPage";
import LoginPage from "@/app/login-page/LoginPage";
import ErrorPage from "@/app/util/error-page/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "",
                element: <LoginPage />,
            },
        ],
    },

    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};
