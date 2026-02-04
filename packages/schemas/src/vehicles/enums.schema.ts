import { z } from 'zod';

export const VehicleTypeSchema = z.enum([
    'pickup',
    'sedan',
    'suv',
    'suvw',
    'compacto',
    'deportivo'
]);

// Tipos inferidos de los schemas
export type VehicleType = z.infer<typeof VehicleTypeSchema>;