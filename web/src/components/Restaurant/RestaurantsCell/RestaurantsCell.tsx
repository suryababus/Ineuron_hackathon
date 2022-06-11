import type { FindRestaurants } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Restaurants from 'src/components/Restaurant/Restaurants'

export const QUERY = gql`
  query FindRestaurants {
    restaurants {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No restaurants yet. '}
      <Link
        to={routes.newRestaurant()}
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

export const Success = ({ restaurants }: CellSuccessProps<FindRestaurants>) => {
  return <Restaurants restaurants={restaurants} />
}
