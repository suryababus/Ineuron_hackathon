export const schema = gql`
  type Restaurant {
    id: Int!
    name: String
    menu: [Menu]!
  }

  type Query {
    restaurants: [Restaurant!]! @requireAuth
    restaurant(id: Int!): Restaurant @requireAuth
  }

  input CreateRestaurantInput {
    name: String
  }

  input UpdateRestaurantInput {
    name: String
  }

  type Mutation {
    createRestaurant(input: CreateRestaurantInput!): Restaurant! @requireAuth
    updateRestaurant(id: Int!, input: UpdateRestaurantInput!): Restaurant!
      @requireAuth
    deleteRestaurant(id: Int!): Restaurant! @requireAuth
  }
`
