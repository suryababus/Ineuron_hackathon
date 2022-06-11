import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RestaurantTableCreateArgs>({
  restaurantTable: {
    one: {
      data: { restaurant_id: 286009, table_no: 'String', available: true },
    },
    two: {
      data: { restaurant_id: 7495265, table_no: 'String', available: true },
    },
  },
})

export type StandardScenario = typeof standard
