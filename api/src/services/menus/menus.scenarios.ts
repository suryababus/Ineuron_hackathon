import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MenuCreateArgs>({
  menu: {
    one: {
      data: {
        category_id: 9324523,
        cuisine_id: 7258097,
        price: 228781.11267915947,
        Restaurant: { create: {} },
      },
    },
    two: {
      data: {
        category_id: 7339352,
        cuisine_id: 6964613,
        price: 715476.6091384391,
        Restaurant: { create: {} },
      },
    },
  },
})

export type StandardScenario = typeof standard
