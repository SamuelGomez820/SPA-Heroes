import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { HeroesLayout } from "./layouts/HeroesLayout.jsx"
import { MarvelPage, DcPage, HeroPage, SearchPage } from "./heroes/index.js";
import { AuthProvider, LoginPage } from "./auth/index.js";
import { PrivateRoute, PublicRoute } from "./routes";

const router =  createBrowserRouter([
    {
        path: "/",
        element: <HeroesLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="marvel"/>
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: "marvel",
                        element: <MarvelPage/>
                    },
                    {
                        path: "dc",
                        element: <DcPage />
                    },
                    {
                        path: "hero/:id",
                        element: <HeroPage />
                    },
                    {
                        path: "search",
                        element: <SearchPage />
                    },
                    {
                        path: "*",
                        element: <Navigate to="marvel"/>
                    }
                ]
            },
        ]
    },
    {
        path: "login",
        element: <PublicRoute children={<LoginPage/>}/>
    }
]);

export const Router = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router}/>
        </AuthProvider>
    );
}