import { createBrowserRouter } from "react-router"
import { mainNav } from "@/app/navigation"
import { AppLayout } from "@/components/layout/AppLayout"
import { PlaceholderPage } from "@/components/layout/PlaceholderPage"
import { DashboardPage } from "@/features/dashboard/DashboardPage"

const placeholderRoutes = mainNav
    .filter((item) => item.to !== "/")
    .map((item) => ({
        path: item.to.slice(1),
        element: <PlaceholderPage title={item.title} />,
    }))

    export const router = createBrowserRouter([
    {
        path: "/",
        Component: AppLayout,
        children: [{ index: true, Component: DashboardPage }, ...placeholderRoutes],
    },
])