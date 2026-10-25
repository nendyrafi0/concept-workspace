import { useLiveQuery } from "dexie-react-hooks"
import { getCurrentWorkspace } from "@/domain/workspace.service"

export function DashboardPage() {
    const workspace = useLiveQuery(() => getCurrentWorkspace(), [])
    
    return (
        <div className="space-y-2 p-6">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <p className="text-sm text-muted-foreground">
                Database lokal: {workspace ? `terhubung (workspace "${workspace.name}")` : "memuat..."}
            </p>
        </div>
    )
}