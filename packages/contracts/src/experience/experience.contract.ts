export type ExperienceContract = {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | null
  description?: string
  technologies?: string[]

  createdAt: string
  updatedAt: string
}