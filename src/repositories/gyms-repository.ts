import { Gym } from '@prisma/client'

export interface GymsRepository {
  findById(email: string): Promise<Gym | null>
}
