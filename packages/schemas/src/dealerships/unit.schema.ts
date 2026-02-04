import { z } from 'zod';
import { DealershipUnitId } from '@repo/types';
import { BrandedSchema } from '../common/branded.schema';
import { GeoCoordinatesSchema } from '../common/geoCoordinates.schema';

export const DealershipTypeSchema = z.enum([
    'venta',            // Venta
    'postventa',        // Postventa
    'servicio',         // Servicio
    'repuestos',        // Repuestos
    'vw_express',       // VW Express
    'chapa_pintura',    // Chapa y Pintura
    'nora_center',      // Nora Center
]);

export const DealershipUnitSchema = z.object({
    id: BrandedSchema<DealershipUnitId>(),
    type: DealershipTypeSchema,
    salesforceId: z.string().optional().describe("Codigo interno producto__c (ej. solo para ventas)"),
    name: z.string(),

    // Datos de contacto y ubicación
    address: z.string(),
    city: z.string(),
    province: z.string(),
    coordinates: GeoCoordinatesSchema,

    contact: z.object({
        phone: z.array(z.string()).optional(),
        email: z.array(z.string().email()).optional(),
    }).optional(),

    schedule: z.string().describe("Texto libre o estructurado según necesidad"),
});

// Tipos inferidos de los schemas
export type DealershipUnit = z.infer<typeof DealershipUnitSchema>;
export type DealershipType = z.infer<typeof DealershipTypeSchema>;

