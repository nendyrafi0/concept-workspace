export type ID = string
export type ISODateString = string
export type ProjectStatus = "planned" | "active" | "on_hold" | "completed"
export type TaskStatus = "todo" | "in_progress" | "done"
export type Priority = "low" | "medium" | "high"

interface BaseEntity {
    id: ID
    createdAt: ISODateString
    updatedAt: ISODateString
}
export interface Workspace extends BaseEntity {
    name: string
    settings: Record<string, unknown>
}
export interface Page extends BaseEntity {
    workspaceId: ID
    parentPageId: ID | null
    projectId: ID | null
    title: string
    icon: string | null
    cover: string | null
    content: unknown // JSON Tiptap, diisi pada Phase 2
    contentVersion: number // versi skema konten (PRD 8.2)
    sortOrder: number
    deletedAt: ISODateString | null
}
export interface Project extends BaseEntity {
    workspaceId: ID
    name: string
    description: string
    status: ProjectStatus
    priority: Priority
    startDate: ISODateString | null
    dueDate: ISODateString | null
    deletedAt: ISODateString | null
}
export interface Task extends BaseEntity {
    workspaceId: ID
    projectId: ID | null
    pageId: ID | null
    title: string
    description: string
    status: TaskStatus
    priority: Priority
    dueAt: ISODateString | null
    completedAt: ISODateString | null
    recurrenceRule: string | null
    deletedAt: ISODateString | null
}
export interface Routine extends BaseEntity {
    workspaceId: ID
    name: string
    schedule: string // format aturan jadwal ditetapkan pada Phase 4
    timezone: string
    isActive: boolean
}
export interface RoutineCompletion {
    id: ID
    routineId: ID
    scheduledFor: string // "YYYY-MM-DD" pada zona waktu routine
    completedAt: ISODateString | null
    status: "done" | "skipped"
}

export interface Attachment {
    id: ID
    workspaceId: ID
    pageId: ID | null
    fileName: string
    mimeType: string
    sizeBytes: number
    localBlobKey: string
    remoteFileId: string | null
    createdAt: ISODateString
    deletedAt: ISODateString | null
}