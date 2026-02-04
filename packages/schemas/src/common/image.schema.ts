import { z } from 'zod';

export const ImageSchema = z.object({
    url: z.string().url(),
    path: z.string(),
    alt: z.string().optional(),
});

// Tipos inferidos de los schemas
export type Image = z.infer<typeof ImageSchema>;
