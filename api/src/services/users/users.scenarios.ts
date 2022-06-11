import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        phoneNo: 'String',
        email: 'String9439613',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        phoneNo: 'String',
        email: 'String9039630',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
