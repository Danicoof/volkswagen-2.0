import { z } from "zod";

export const GeoCoordinatesSchema = z.object({
    latitude: z.number(),
    longitude: z.number(),
});

// Tipos inferidos de los schemas
export type GeoCoordinates = z.infer<typeof GeoCoordinatesSchema>;