export type ProjectContract = {
  id: string
  name: string
  description?: string
  url?: string
  repositoryUrl?: string
  isPrivate: boolean

  createdAt: string
  updatedAt: string
  deletedAt: string | null
}