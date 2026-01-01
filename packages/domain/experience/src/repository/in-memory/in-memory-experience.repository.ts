import { Experience } from '../../entity/experience.entity'
import { ExperienceRepository } from '../experience.repository'

export class InMemoryExperienceRepository implements ExperienceRepository {
  private items: Experience[] = []

  async create(experience: Experience): Promise<void> {
    this.items.push(experience)
  }

  async findAll(): Promise<Experience[]> {
    return [...this.items]
  }
}