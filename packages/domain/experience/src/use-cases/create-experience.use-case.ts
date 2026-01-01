import { Experience } from '../entity/experience.entity'
import { ExperienceRepository } from '../repository/experience.repository'

type CreateExperienceInput = {
  id: string
  company: string
  role: string
  startDate: Date
  endDate: Date | null
  description?: string
  technologies?: string[]
}

export class CreateExperienceUseCase {
  constructor(
    private readonly repository: ExperienceRepository
  ) {}

  async execute(input: CreateExperienceInput): Promise<void> {
    const now = new Date()

    const experience = new Experience({
      ...input,
      createdAt: now,
      updatedAt: now
    })

    await this.repository.create(experience)
  }
}