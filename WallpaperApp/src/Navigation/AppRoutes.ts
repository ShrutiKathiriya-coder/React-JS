import { createBrowserRouter } from "react-router";
import MainApp from "../MainApp";
import GalleryView from "../components/gallery";

export const navigationPaths = {
    GalleryView: '/gallery'
}

export const appRouter = createBrowserRouter([
    {
        path: '/',
        Component: MainApp,
        children: [
            {
                index: true,
                path: navigationPaths.GalleryView,
                Component: GalleryView
            }
        ]
    }
])
