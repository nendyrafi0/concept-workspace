export const newId = (): string => crypto.randomUUID()
export const nowISO = (): string => new Date().toISOString()