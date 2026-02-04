import { z } from 'zod';
import { FileSchema } from '../common/file.schema';

export const TechnicalSheetSchema = z.object({
    discriminator: z.string().optional().describe("Clave del filtro, ej: 'motor'. Si existe, se ignora url/name raíz"),
    question: z.string().optional().describe("Pregunta del bot"),
    variants: z.array(FileSchema).optional(),
})

export type TechnicalSheet = z.infer<typeof TechnicalSheetSchema>;
