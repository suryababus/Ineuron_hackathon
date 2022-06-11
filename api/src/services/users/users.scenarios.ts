import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        phoneNo: 'String',
        email: 'String6376551',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        phoneNo: 'String',
        email: 'String1703085',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
