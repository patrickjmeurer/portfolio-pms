import {
  CreateExperienceUseCase,
  InMemoryExperienceRepository,
  ListExperiencesUseCase
} from '../index'

async function run() {
  const repo = new InMemoryExperienceRepository()

  const create = new CreateExperienceUseCase(repo)
  const list = new ListExperiencesUseCase(repo)

  await create.execute({
    id: crypto.randomUUID(),
    company: 'Sincroniza',
    role: 'Internal Installer',
    startDate: new Date('2024-11-01'),
    endDate: null
  })

  const experiences = await list.execute()
  console.log(experiences)
}

run()