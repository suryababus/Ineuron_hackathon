export const schema = gql`
  type User {
    id: Int!
    name: String
    phoneNo: String!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    name: String
    phoneNo: String!
  }

  input UpdateUserInput {
    name: String
    phoneNo: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
