import type { FindOrderById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Order from 'src/components/Order/Order'

export const QUERY = gql`
  query FindOrderById($id: Int!) {
    order: order(id: $id) {
      id
      status
      user_id
      restaurant_id
      total_price
      table_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Order not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ order }: CellSuccessProps<FindOrderById>) => {
  return <Order order={order} />
}
