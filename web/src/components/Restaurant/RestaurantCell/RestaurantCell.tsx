import type { FindRestaurantById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Restaurant from 'src/components/Restaurant/Restaurant'

export const QUERY = gql`
  query FindRestaurantById($id: Int!) {
    restaurant: restaurant(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Restaurant not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ restaurant }: CellSuccessProps<FindRestaurantById>) => {
  return <Restaurant restaurant={restaurant} />
}
