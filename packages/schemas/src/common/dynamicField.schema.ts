import { z } from 'zod';

// --- Configuración de Campos Dinámicos (Global) ---
export const DynamicFieldTypeSchema = z.enum([
    'boolean',
    'string',
    'number',
    'wa_text',
    'url'
]);

export const DynamicFieldDefinitionSchema = z.object({
    key: z.string().describe("Clave única, ej: 'has_my_vw_app'"),
    label: z.string().describe("Label para el admin/front, ej: 'Tiene App My VW?'"),
    module: z.enum(['vehicle', 'dealership', 'user']).optional().describe("Para organizar en el admin"),
    type: DynamicFieldTypeSchema,
    defaultValue: z.union([z.boolean(), z.string(), z.number()]).optional(),
    isActive: z.boolean().default(false),
});


// --- Valor de Instancia ---
export const DynamicFieldValueSchema = z.object({
    key: z.string(),
    value: z.union([z.boolean(), z.string(), z.number()]),
});

// Tipos inferidos de los schemas
export type DynamicFieldValue = z.infer<typeof DynamicFieldValueSchema>;
export type DynamicFieldDefinition = z.infer<typeof DynamicFieldDefinitionSchema>;
