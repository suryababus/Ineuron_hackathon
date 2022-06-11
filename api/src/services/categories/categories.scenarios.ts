import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CategoryCreateArgs>({
  category: { one: { data: {} }, two: { data: {} } },
})

export type StandardScenario = typeof standard
