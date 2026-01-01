import { Experience } from '../entity/experience.entity'
import { ExperienceRepository } from '../repository/experience.repository'

export class ListExperiencesUseCase {
  constructor(
    private readonly repository: ExperienceRepository
  ) {}

  async execute(): Promise<Experience[]> {
    return this.repository.findAll()
  }
}