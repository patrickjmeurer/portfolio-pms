import { z } from 'zod'
import type { ProfileContract } from './profile.contract'

export const ProfileSchema: z.ZodType<ProfileContract> = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  title: z.string().min(1),
  bio: z.string().optional(),
  avatarUrl: z.string().url().optional(),

  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
})