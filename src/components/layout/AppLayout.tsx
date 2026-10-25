import { Outlet } from "react-router"
import { AppSidebar } from "@/components/layout/AppSidebar"
import { ThemeToggle } from "@/components/layout/ThemeToggle"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
export function AppLayout() {
 return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
        <header className="flex h-12 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="ml-auto">
                <ThemeToggle />
            </div>
        </header>
        <main className="flex-1">
            <Outlet />
        </main>
    </SidebarInset>
    </SidebarProvider>
 )
}