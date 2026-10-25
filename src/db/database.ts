import Dexie, { type EntityTable } from "dexie"

import type {
    Attachment, Page, Project, Routine, RoutineCompletion, Task, Workspace,
} from "./types"

export const db = new Dexie("PersonalWorkspaceDB") as Dexie & {
    workspaces: EntityTable<Workspace, "id">
    pages: EntityTable<Page, "id">
    projects: EntityTable<Project, "id">
    tasks: EntityTable<Task, "id">
    routines: EntityTable<Routine, "id">
    routineCompletions: EntityTable<RoutineCompletion, "id">
    attachments: EntityTable<Attachment, "id">
}

db.version(1).stores({
    workspaces: "id, updatedAt",
    pages: "id, workspaceId, parentPageId, projectId, sortOrder, updatedAt",
    projects: "id, workspaceId, status, priority, dueDate, updatedAt",
    tasks: "id, workspaceId, projectId, pageId, status, priority, dueAt, updatedAt",
    routines: "id, workspaceId, updatedAt",
    routineCompletions: "id, routineId, scheduledFor",
    attachments: "id, workspaceId, pageId",
})

db.version(2)
 .stores({
    routineCompletions: "id, routineId, scheduledFor, &[routineId+scheduledFor]",
 })
.upgrade(async (tx) => {
    const seen = new Set<string>()
    const duplicateIds: string[] = []
    await tx.table("routineCompletions").each((row) => {
    const key = `${row.routineId}|${row.scheduledFor}`
        if (seen.has(key)) duplicateIds.push(row.id)
        else seen.add(key)
    })
    await tx.table("routineCompletions").bulkDelete(duplicateIds)
 })


