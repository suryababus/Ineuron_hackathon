import type { FindRestaurantTableById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RestaurantTable from 'src/components/RestaurantTable/RestaurantTable'

export const QUERY = gql`
  query FindRestaurantTableById($id: Int!) {
    restaurantTable: restaurantTable(id: $id) {
      id
      restaurant_id
      table_no
      available
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RestaurantTable not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ restaurantTable }: CellSuccessProps<FindRestaurantTableById>) => {
  return <RestaurantTable restaurantTable={restaurantTable} />
}
