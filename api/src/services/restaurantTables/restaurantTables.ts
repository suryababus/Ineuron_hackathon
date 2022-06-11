import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const restaurantTables: QueryResolvers['restaurantTables'] = () => {
  return db.restaurantTable.findMany()
}

export const restaurantTable: QueryResolvers['restaurantTable'] = ({ id }) => {
  return db.restaurantTable.findUnique({
    where: { id },
  })
}

export const createRestaurantTable: MutationResolvers['createRestaurantTable'] =
  ({ input }) => {
    return db.restaurantTable.create({
      data: input,
    })
  }

export const updateRestaurantTable: MutationResolvers['updateRestaurantTable'] =
  ({ id, input }) => {
    return db.restaurantTable.update({
      data: input,
      where: { id },
    })
  }

export const deleteRestaurantTable: MutationResolvers['deleteRestaurantTable'] =
  ({ id }) => {
    return db.restaurantTable.delete({
      where: { id },
    })
  }
