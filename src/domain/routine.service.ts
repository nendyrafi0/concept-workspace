import { db } from "@/db/database"
import type { RoutineCompletion } from "@/db/types"
import { newId, nowISO } from "@/lib/entity"

export function markRoutineDone(routineId: string, scheduledFor: string) {
    return db.transaction("rw", db.routineCompletions, async () => {
        const existing = await db.routineCompletions
            .where("[routineId+scheduledFor]")
            .equals([routineId, scheduledFor])
            .first()
        if (existing) return existing

        const completion: RoutineCompletion = {
            id: newId(),
            routineId,
            scheduledFor,
            completedAt: nowISO(),
            status: "done",
        }
        await db.routineCompletions.add(completion)
        return completion
    })
}