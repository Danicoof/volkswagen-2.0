import { z } from 'zod';
import { BrandedSchema } from '../common/branded.schema';
import { VehicleVersionId } from '@repo/types';
import { VehicleSpecsSchema } from './specs/specs.schema';
import { ImageSchema } from '../common/image.schema';

export const VersionColorSchema = z.object({
    name: z.string().describe("Nombre de la variante, ej: 'Blanco Puro'"),
    image: ImageSchema,
});

export const VehicleVersionSchema = z.object({
    id: BrandedSchema<VehicleVersionId>(),
    name: z.string().describe("Ej: 'Highline 250 TSI'"),
    description: z.array(z.string()).optional(),
    active: z.boolean().optional().default(false),

    // Especificaciones Técnicas Agrupadas
    specs: VehicleSpecsSchema,

    // Colores disponibles en esta versión
    colors: z.object({
        text: z.string().optional().describe("Todos los colores disponibles en esta versión"),
        families: z.array(
            z.object({
                name: z.string().describe("Nombre general del color, ej: 'Blanco'"),
                variants: z.array(VersionColorSchema),
            })
        ),
    }),
});

// Tipos inferidos de los schemas
export type VehicleVersion = z.infer<typeof VehicleVersionSchema>;
