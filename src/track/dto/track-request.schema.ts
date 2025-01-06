import { z } from 'zod';

export const TrackRequestSchema = z
  .object({
    id: z.number(),
    count: z.number().nullable().optional().default(null),
    content: z.string().optional().default(''),
    whatever: z.string().nullable().default(null),
  })
  .strict();

export type TrackRequestDto = z.infer<typeof TrackRequestSchema>;
