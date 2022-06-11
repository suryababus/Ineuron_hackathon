export const schema = gql`
  type RestaurantTable {
    id: Int!
    restaurant_id: Int!
    table_no: String!
    available: Boolean!
  }

  type Query {
    restaurantTables: [RestaurantTable!]! @requireAuth
    restaurantTable(id: Int!): RestaurantTable @requireAuth
  }

  input CreateRestaurantTableInput {
    restaurant_id: Int!
    table_no: String!
    available: Boolean!
  }

  input UpdateRestaurantTableInput {
    restaurant_id: Int
    table_no: String
    available: Boolean
  }

  type Mutation {
    createRestaurantTable(input: CreateRestaurantTableInput!): RestaurantTable!
      @requireAuth
    updateRestaurantTable(
      id: Int!
      input: UpdateRestaurantTableInput!
    ): RestaurantTable! @requireAuth
    deleteRestaurantTable(id: Int!): RestaurantTable! @requireAuth
  }
`
