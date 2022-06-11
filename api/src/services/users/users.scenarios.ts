import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: { data: { phoneNo: 'String' } },
    two: { data: { phoneNo: 'String' } },
  },
})

export type StandardScenario = typeof standard
