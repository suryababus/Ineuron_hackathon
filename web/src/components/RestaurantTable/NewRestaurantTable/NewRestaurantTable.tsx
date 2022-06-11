import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RestaurantTableForm from 'src/components/RestaurantTable/RestaurantTableForm'

const CREATE_RESTAURANT_TABLE_MUTATION = gql`
  mutation CreateRestaurantTableMutation($input: CreateRestaurantTableInput!) {
    createRestaurantTable(input: $input) {
      id
    }
  }
`

const NewRestaurantTable = () => {
  const [createRestaurantTable, { loading, error }] = useMutation(CREATE_RESTAURANT_TABLE_MUTATION, {
    onCompleted: () => {
      toast.success('RestaurantTable created')
      navigate(routes.restaurantTables())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createRestaurantTable({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RestaurantTable</h2>
      </header>
      <div className="rw-segment-main">
        <RestaurantTableForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRestaurantTable
