export const schema = gql`
  type OrderItem {
    id: Int!
    item_name: String
    category_id: Int!
    image_url: String
    price: Float!
    order_id: Int!
  }

  type Query {
    orderItems: [OrderItem!]! @requireAuth
    orderItem(id: Int!): OrderItem @requireAuth
  }

  input CreateOrderItemInput {
    item_name: String
    category_id: Int!
    image_url: String
    price: Float!
    order_id: Int!
  }

  input UpdateOrderItemInput {
    item_name: String
    category_id: Int
    image_url: String
    price: Float
    order_id: Int
  }

  type Mutation {
    createOrderItem(input: CreateOrderItemInput!): OrderItem! @requireAuth
    updateOrderItem(id: Int!, input: UpdateOrderItemInput!): OrderItem!
      @requireAuth
    deleteOrderItem(id: Int!): OrderItem! @requireAuth
    insertOrderItems(objects: [CreateOrderItemInput]): [OrderItem] @requireAuth
  }
`
