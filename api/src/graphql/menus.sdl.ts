export const schema = gql`
  type Menu {
    id: Int!
    item_name: String
    category_id: Int!
    cuisine_id: Int!
    restaurant_id: Int!
    Restaurant: Restaurant!
  }

  type Query {
    menus: [Menu!]! @requireAuth
    menu(id: Int!): Menu @requireAuth
  }

  input CreateMenuInput {
    item_name: String
    category_id: Int!
    cuisine_id: Int!
    restaurant_id: Int!
  }

  input UpdateMenuInput {
    item_name: String
    category_id: Int
    cuisine_id: Int
    restaurant_id: Int
  }

  type Mutation {
    createMenu(input: CreateMenuInput!): Menu! @requireAuth
    updateMenu(id: Int!, input: UpdateMenuInput!): Menu! @requireAuth
    deleteMenu(id: Int!): Menu! @requireAuth
  }
`
