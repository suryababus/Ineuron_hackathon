import type { FindRestaurantTables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import RestaurantTables from 'src/components/RestaurantTable/RestaurantTables'

export const QUERY = gql`
  query FindRestaurantTables {
    restaurantTables {
      id
      restaurant_id
      table_no
      available
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No restaurantTables yet. '}
      <Link
        to={routes.newRestaurantTable()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ restaurantTables }: CellSuccessProps<FindRestaurantTables>) => {
  return <RestaurantTables restaurantTables={restaurantTables} />
}
