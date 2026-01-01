import { Experience } from '@portfolio/domain-experience'

export class PrismaExperienceMapper {
  static toDomain(raw: any): Experience {
    return new Experience({
      id: raw.id,
      company: raw.company,
      role: raw.role,
      startDate: raw.startDate,
      endDate: raw.endDate,
      description: raw.description ?? undefined,
      technologies: raw.technologies ?? undefined,
      createdAt: raw.createdAt,
      updatedAt: raw.updatedAt
    })
  }

  static toPersistence(entity: Experience) {
    return {
      id: entity.id,
      company: entity.company,
      role: entity.role,
      startDate: entity.period.startDate,
      endDate: entity.period.endDate,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  }
}