export const schema = gql`
  type Order {
    id: Int!
    status: String
    user_id: Int!
    restaurant_id: Int!
  }

  type Query {
    orders: [Order!]! @requireAuth
    order(id: Int!): Order @requireAuth
  }

  input CreateOrderInput {
    status: String
    user_id: Int!
    restaurant_id: Int!
  }

  input UpdateOrderInput {
    status: String
    user_id: Int
    restaurant_id: Int
  }

  type Mutation {
    createOrder(input: CreateOrderInput!): Order! @requireAuth
    updateOrder(id: Int!, input: UpdateOrderInput!): Order! @requireAuth
    deleteOrder(id: Int!): Order! @requireAuth
  }
`
