import type { EditRestaurantTableById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RestaurantTableForm from 'src/components/RestaurantTable/RestaurantTableForm'

export const QUERY = gql`
  query EditRestaurantTableById($id: Int!) {
    restaurantTable: restaurantTable(id: $id) {
      id
      restaurant_id
      table_no
      available
    }
  }
`
const UPDATE_RESTAURANT_TABLE_MUTATION = gql`
  mutation UpdateRestaurantTableMutation($id: Int!, $input: UpdateRestaurantTableInput!) {
    updateRestaurantTable(id: $id, input: $input) {
      id
      restaurant_id
      table_no
      available
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ restaurantTable }: CellSuccessProps<EditRestaurantTableById>) => {
  const [updateRestaurantTable, { loading, error }] = useMutation(UPDATE_RESTAURANT_TABLE_MUTATION, {
    onCompleted: () => {
      toast.success('RestaurantTable updated')
      navigate(routes.restaurantTables())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRestaurantTable({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit RestaurantTable {restaurantTable.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RestaurantTableForm restaurantTable={restaurantTable} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
