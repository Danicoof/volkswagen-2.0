import { z } from 'zod';

export const RoleSchema = z.enum(['admin', 'moderator', 'user', 'guest'] as const);

// Inferimos el Tipo desde el Schema
export type Role = z.infer<typeof RoleSchema>;