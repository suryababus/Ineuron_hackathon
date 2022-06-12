import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: { data: { user_id: 4532117, restaurant_id: 6028891 } },
    two: { data: { user_id: 8346522, restaurant_id: 710625 } },
  },
})

export type StandardScenario = typeof standard
