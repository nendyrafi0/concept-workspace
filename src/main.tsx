import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router/dom"
import "./index.css"
import { router } from "@/app/router"
import { bootstrap } from "@/app/bootstrap"
import "@/pwa"

bootstrap().finally(() => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
})