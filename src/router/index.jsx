import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/app/landing-page/LandingPage";
import LoginPage from "@/app/login-page/LoginPage";
import ErrorPage from "@/app/util/error-page/ErrorPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export const RouteComponents = () => {
    return <RouterProvider router={routes} />;
};
