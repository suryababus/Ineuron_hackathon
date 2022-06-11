import type { FindMenus } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Menus from 'src/components/Menu/Menus'

export const QUERY = gql`
  query FindMenus {
    menus {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No menus yet. '}
      <Link
        to={routes.newMenu()}
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

export const Success = ({ menus }: CellSuccessProps<FindMenus>) => {
  return <Menus menus={menus} />
}
