import { Experience } from '../entity/experience.entity'

export interface ExperienceRepository {
  create(experience: Experience): Promise<void>
  findAll(): Promise<Experience[]>
}