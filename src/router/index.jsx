import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "@/app/util/error-page/ErrorPage";
// import LandingPage from "@/app/landing-page/LandingPage";
import LandingPage from "@/app/landing-page/LandingPage";
import LoginPage from "@/app/landing-page/login-page/LoginPage";
import RegisterPage from "@/app/landing-page/register-page/RegisterPage";

//staff pages
import StaffPage from "@/app/staff-page/StaffPage";
import StaffDashboardPage from "@/app/staff-page/dashboard-page/DashboardPage";
import QuestionBankPage from "@/app/staff-page/question-bank-page/QuestionBankPage";
import ResourcesPage from "@/app/staff-page/resources-page/ResourcesPage";
import SettingsPage from "@/app/staff-page/settings-page/SettingsPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />,
        children: [
            {
                path: "",
                element: <LoginPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegisterPage />,
            },
        ],
    },
    {
        path: "staff",
        element: <StaffPage />,
        children: [
            {
                path: "",
                element: <StaffDashboardPage />,
            },
            {
                path: "question-bank",
                element: <QuestionBankPage />,
            },
            {
                path: "resources",
                element: <ResourcesPage />,
            },
            {
                path: "settings",
                element: <SettingsPage />,
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
