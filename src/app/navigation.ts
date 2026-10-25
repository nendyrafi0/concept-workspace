import {
 CalendarCheck, CalendarDays, FolderKanban, Home, Inbox, ListChecks,
 NotebookText, Repeat, Search, Settings, type LucideIcon,
} from "lucide-react"
export interface NavItem {
 title: string
 to: string
 icon: LucideIcon
}
export const mainNav: NavItem[] = [
 { title: "Home", to: "/", icon: Home },
 { title: "Inbox", to: "/inbox", icon: Inbox },
 { title: "Today", to: "/today", icon: CalendarCheck },
 { title: "Upcoming", to: "/upcoming", icon: CalendarDays },
 { title: "Tasks", to: "/tasks", icon: ListChecks },
 { title: "Projects", to: "/projects", icon: FolderKanban },
 { title: "Routines", to: "/routines", icon: Repeat },
 { title: "Notes", to: "/notes", icon: NotebookText },
 { title: "Search", to: "/search", icon: Search },
 { title: "Settings", to: "/settings", icon: Settings },
]