import { z } from 'zod';

export const OrganizationSchema = z.enum(['bebot', 'volkswagen'] as const);

// Inferimos el Tipo desde el Schema
export type Organization = z.infer<typeof OrganizationSchema>;