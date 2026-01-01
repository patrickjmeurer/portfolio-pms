import { z } from 'zod'
import type { ExperienceContract } from './experience.contract'

export const ExperienceSchema: z.ZodType<ExperienceContract> = z.object({
  id: z.string().uuid(),
  company: z.string().min(1),
  role: z.string().min(1),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().nullable(),
  description: z.string().optional(),
  technologies: z.array(z.string()).optional(),

  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})