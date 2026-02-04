import { z } from 'zod';
import { BrandedSchema } from '../common/branded.schema';
import { VehicleModelId } from '@repo/types';
import { VehicleTypeSchema } from './enums.schema';
import { VehicleVersionSchema } from './version.schema';
import { TechnicalSheetSchema } from './technicalSheet.schema';
import { DynamicFieldValueSchema } from '../common/dynamicField.schema';

export const VehicleModelSchema = z.object({
    id: BrandedSchema<VehicleModelId>(),
    name: z.string().describe("Ej: 'Tiguan'"),
    slug: z.string().describe("URL friendly, ej: 'tiguan'"),
    type: VehicleTypeSchema, // SUV, Pickup, etc.
    description: z.string().optional().describe("Texto de presentación"),
    image: z.string().url().describe("Imagen principal del modelo"),
    active: z.boolean().optional().default(false),

    // Vigencia de Venta
    salesValidity: z.object({
        from: z.date(),
        to: z.date().optional(),
    }).optional(),

    // Fichas Técnicas (Array porque puede tener varias variantes)
    technicalSheets: z.array(TechnicalSheetSchema).optional(),

    // Versiones
    versions: z.array(VehicleVersionSchema),

    // Campos Dinámicos (Extras: Novedades, Flags, etc)
    extras: z.array(DynamicFieldValueSchema).optional(),

    createdAt: z.date(),
    updatedAt: z.date(),
});

export const CreateVehicleModelSchema = VehicleModelSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
});

export const UpdateVehicleModelSchema = CreateVehicleModelSchema.partial();

// Tipos inferidos de los schemas
export type VehicleModel = z.infer<typeof VehicleModelSchema>;
export type CreateVehicleModel = z.infer<typeof CreateVehicleModelSchema>;
export type UpdateVehicleModel = z.infer<typeof UpdateVehicleModelSchema>;
