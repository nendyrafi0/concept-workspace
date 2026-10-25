import { db } from "@/db/database"
import type { Workspace } from "@/db/types"
import { newId, nowISO } from "@/lib/entity"
export function getCurrentWorkspace() {
 return db.workspaces.toCollection().first()
}
// FR-WRK-001: satu workspace pribadi. Transaksi rw mencegah dua workspace
// terbentuk jika aplikasi dibuka bersamaan di dua tab.
export function ensureDefaultWorkspace(): Promise<Workspace> {
    return db.transaction("rw", db.workspaces, async () => {
        const existing = await db.workspaces.toCollection().first()
        if (existing) return existing

        const now = nowISO()
        const workspace: Workspace = {
            id: newId(),
            name: "My Workspace",
            settings: {},
            createdAt: now,
            updatedAt: now,
        }
        await db.workspaces.add(workspace)
        return workspace
    })
}