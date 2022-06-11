import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MenuCreateArgs>({
  menu: {
    one: {
      data: {
        category_id: 9635731,
        cuisine_id: 9269861,
        Restaurant: { create: {} },
      },
    },
    two: {
      data: {
        category_id: 8400167,
        cuisine_id: 5053254,
        Restaurant: { create: {} },
      },
    },
  },
})

export type StandardScenario = typeof standard
