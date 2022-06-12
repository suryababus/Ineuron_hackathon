import type { FindMenuById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import * as GifLoader from 'src/components/Loading/Loading'

import Menu from 'src/components/Menu/Menu'

export const QUERY = gql`
  query FindMenuById($id: Int!) {
    menu: menu(id: $id) {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
      image_url
      price
    }
  }
`

export const Loading = () => <GifLoader.default />

export const Empty = () => <div>Menu not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menu }: CellSuccessProps<FindMenuById>) => {
  return <Menu menu={menu} />
}
