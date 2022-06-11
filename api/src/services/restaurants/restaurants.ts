import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  RestaurantResolvers,
} from 'types/graphql'

export const restaurants: QueryResolvers['restaurants'] = () => {
  return db.restaurant.findMany()
}

export const restaurant: QueryResolvers['restaurant'] = ({ id }) => {
  return db.restaurant.findUnique({
    where: { id },
  })
}

export const createRestaurant: MutationResolvers['createRestaurant'] = ({
  input,
}) => {
  return db.restaurant.create({
    data: input,
  })
}

export const updateRestaurant: MutationResolvers['updateRestaurant'] = ({
  id,
  input,
}) => {
  return db.restaurant.update({
    data: input,
    where: { id },
  })
}

export const deleteRestaurant: MutationResolvers['deleteRestaurant'] = ({
  id,
}) => {
  return db.restaurant.delete({
    where: { id },
  })
}

export const Restaurant: RestaurantResolvers = {
  menu: (_obj, { root }) =>
    db.restaurant.findUnique({ where: { id: root.id } }).menu(),
}
