import { z } from 'zod';
import { DealershipId } from '@repo/types';
import { BrandedSchema } from '../common/branded.schema';
import { DealershipUnitSchema } from './unit.schema';

export const DealershipSchema = z.object({
    id: BrandedSchema<DealershipId>(),
    partnerId: z.string().describe("Identificador del grupo"),
    name: z.string(),
    units: z.array(DealershipUnitSchema),
    slug: z.string().describe("Para URLs amigables"),
    createdAt: z.date(),
    updatedAt: z.date(),
});

// Tipo inferido del schema
export type Dealership = z.infer<typeof DealershipSchema>;
