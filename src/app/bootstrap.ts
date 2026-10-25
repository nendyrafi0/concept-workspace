import { ensureDefaultWorkspace } from "@/domain/workspace.service"
export async function bootstrap() {
    try {
        await ensureDefaultWorkspace()
    } catch (error) {
        console.error("Bootstrap gagal:", error)
    }
}