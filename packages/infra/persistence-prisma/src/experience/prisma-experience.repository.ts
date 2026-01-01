import { ExperienceRepository } from '@portfolio/domain-experience'
import { prisma } from '../client'
import { PrismaExperienceMapper } from './prisma-experience.mapper'

export class PrismaExperienceRepository implements ExperienceRepository {
  async create(experience: any): Promise<void> {
    const data = PrismaExperienceMapper.toPersistence(experience)

    await prisma.experience.create({ data })
  }

  async findAll() {
    const records = await prisma.experience.findMany()

    return records.map(PrismaExperienceMapper.toDomain)
  }
}