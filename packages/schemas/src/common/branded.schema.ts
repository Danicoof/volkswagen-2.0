import { z } from "zod";

export const BrandedSchema = <T>() => {
    return z.string() as unknown as z.ZodType<T>;
}