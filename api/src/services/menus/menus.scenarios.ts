import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.MenuCreateArgs>({
  menu: {
    one: {
      data: {
        category_id: 5823916,
        cuisine_id: 8477175,
        price: 2757350.570420218,
        Restaurant: { create: {} },
      },
    },
    two: {
      data: {
        category_id: 2646503,
        cuisine_id: 6864907,
        price: 2626091.7233429425,
        Restaurant: { create: {} },
      },
    },
  },
})

export type StandardScenario = typeof standard
