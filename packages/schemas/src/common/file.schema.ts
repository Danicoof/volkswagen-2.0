import { z } from 'zod';

export const FileSchema = z.object({
    name: z.string().describe("Nombre del documento, ej: 'Ficha Técnica V6'"),
    url: z.string().url().describe("URL del PDF"),
    path: z.string().describe("Path del archivo en el storage"),
})

// Tipos inferidos de los schemas
export type File = z.infer<typeof FileSchema>;