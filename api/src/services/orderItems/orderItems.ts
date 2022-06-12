import { db } from 'src/lib/db'
import type { QueryResolvers, MutationResolvers } from 'types/graphql'

export const orderItems: QueryResolvers['orderItems'] = () => {
  return db.orderItem.findMany()
}

export const orderItem: QueryResolvers['orderItem'] = ({ id }) => {
  return db.orderItem.findUnique({
    where: { id },
  })
}

export const createOrderItem: MutationResolvers['createOrderItem'] = ({
  input,
}) => {
  return db.orderItem.create({
    data: input,
  })
}
export const insertOrderItems: MutationResolvers['insertOrderItems'] = ({
  objects,
}) => {
  return db.orderItem.createMany({
    data: objects,
  })
}

export const updateOrderItem: MutationResolvers['updateOrderItem'] = ({
  id,
  input,
}) => {
  return db.orderItem.update({
    data: input,
    where: { id },
  })
}

export const deleteOrderItem: MutationResolvers['deleteOrderItem'] = ({
  id,
}) => {
  return db.orderItem.delete({
    where: { id },
  })
}
