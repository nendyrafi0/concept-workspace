import { NavLink, useLocation, } from "react-router"
import { mainNav } from "@/app/navigation"
import {
 Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarHeader,
 SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar() {
    const { pathname } = useLocation()
    const isActive = (to: string) => to === "/" ? pathname === to : pathname.startsWith(to)
    
    return (
    <Sidebar>
        <SidebarHeader className="px-4 py-3 font-semibold">Workspace</SidebarHeader>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                    {mainNav.map((item) => (
                        <SidebarMenuItem key={item.to}>
                            <SidebarMenuButton asChild isActive={isActive(item.to)}>
                                <NavLink to={item.to} end={item.to === "/"}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
    )
}