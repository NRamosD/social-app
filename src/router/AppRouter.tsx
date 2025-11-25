import { createBrowserRouter, Outlet } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import GeneralLayout from "../layouts/GeneralLayout";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <>
            <PrivateRoutes>
                <GeneralLayout/>
            </PrivateRoutes>
        </>,
        errorElement: <h2>Error :c</h2>,
        children: [
            {
                path:"eu",
                element: <>
                    <h1>Pagina de path eu</h1>
                    <a href="/eu/eu2">ir a eu2</a>
                    <Outlet/>
                </>,
                children: [
                    {
                        path: "eu2",
                        element: <><h1>Hija de path eu</h1><a href="/eu">ir a eu</a></>,
                    }
                ]
            }
        ]
    },
]);