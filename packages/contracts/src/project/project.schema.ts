import { z } from 'zod'
import type { ProjectContract } from './project.contract'

export const ProjectSchema: z.ZodType<ProjectContract> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  description: z.string().optional(),
  url: z.string().url().optional(),
  repositoryUrl: z.string().url().optional(),
  isPrivate: z.boolean(),

  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable()
})