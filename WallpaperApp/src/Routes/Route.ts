import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../Pages/HomePage";

export const routepath = {
    HomePage: '/'
}
export const route = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: HomePage
            }
        ]
    }
])
