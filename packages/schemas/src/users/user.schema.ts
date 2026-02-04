import { z } from 'zod';
import { UserId } from '@repo/types';
import { RoleSchema } from './role.schema';
import { OrganizationSchema } from '../common/organization.schema';
import { BrandedSchema } from '../common/branded.schema';

export const UserSchema = z.object({
    id: BrandedSchema<UserId>(),
    name: z.string().min(1),
    email: z.string().email(),
    role: RoleSchema,
    organization: OrganizationSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
});

export const CreateUserSchema = UserSchema.omit({
    id: true,
    createdAt: true,
    updatedAt: true
});

export const UpdateUserSchema = CreateUserSchema.partial();


// Inferimos el Tipo desde el Schema
export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>;
