import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MenuCreateArgs>({
  menu: {
    one: {
      data: {
        category_id: 5965444,
        cuisine_id: 1510970,
        Restaurant: { create: {} },
      },
    },
    two: {
      data: {
        category_id: 8269613,
        cuisine_id: 2154999,
        Restaurant: { create: {} },
      },
    },
  },
})

export type StandardScenario = typeof standard
