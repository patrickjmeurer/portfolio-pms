export type ExperienceProps = {
  id: string
  company: string
  role: string
  startDate: Date
  endDate: Date | null
  description?: string
  technologies?: string[]
  createdAt: Date
  updatedAt: Date
}

export class Experience {
  private props: ExperienceProps

  constructor(props: ExperienceProps) {
    if (props.endDate && props.endDate < props.startDate) {
      throw new Error('endDate cannot be before startDate')
    }

    this.props = props
  }

  get id() {
    return this.props.id
  }

  get company() {
    return this.props.company
  }

  get role() {
    return this.props.role
  }

  get period() {
    return {
      startDate: this.props.startDate,
      endDate: this.props.endDate
    }
  }

  updateDescription(description?: string) {
    this.props.description = description
    this.touch()
  }

  private touch() {
    this.props.updatedAt = new Date()
  }
}