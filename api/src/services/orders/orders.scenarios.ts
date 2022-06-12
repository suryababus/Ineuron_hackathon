import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrderCreateArgs>({
  order: {
    one: { data: { user_id: 2354064, restaurant_id: 9268979 } },
    two: { data: { user_id: 6704975, restaurant_id: 8135129 } },
  },
})

export type StandardScenario = typeof standard
