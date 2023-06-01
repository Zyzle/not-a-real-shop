import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

export const ReserveStockSchema = z.object({
  quantity: z.number().int().positive(),
  cartItemId: z.string().uuid(),
});

export class ReserveStockDto extends createZodDto(ReserveStockSchema) {}
