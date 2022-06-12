import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.OrderItemCreateArgs>({
  orderItem: {
    one: {
      data: {
        category_id: 8373917,
        price: 4153943.1085961144,
        order_id: 3809058,
      },
    },
    two: {
      data: {
        category_id: 1420934,
        price: 703229.0922329709,
        order_id: 7736715,
      },
    },
  },
})

export type StandardScenario = typeof standard
