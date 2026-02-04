import { z } from 'zod';

// Esquema genérico para una propiedad de especificación
export const SpecPropertySchema = z.object({
    label: z.string(),
    value: z.union([z.string(), z.boolean(), z.number()]),
    unit: z.string().optional(), // 'cv', 'mm', 'kg'
});

const SpecSchema = z.record(SpecPropertySchema);

export const VehicleSpecsSchema = z.object({
    dimensions: SpecSchema.optional(),
    engine: SpecSchema.optional(),
    safety: SpecSchema.optional(),
    comfort: SpecSchema.optional(),
    exterior: SpecSchema.optional(),
    interior: SpecSchema.optional(),
    functional: SpecSchema.optional(),
    general: SpecSchema.optional(),
});

// Tipos inferidos de los schemas
export type VehicleSpecs = z.infer<typeof VehicleSpecsSchema>;
