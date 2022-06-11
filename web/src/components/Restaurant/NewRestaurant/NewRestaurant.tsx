import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import RestaurantForm from 'src/components/Restaurant/RestaurantForm'

const CREATE_RESTAURANT_MUTATION = gql`
  mutation CreateRestaurantMutation($input: CreateRestaurantInput!) {
    createRestaurant(input: $input) {
      id
    }
  }
`

const NewRestaurant = () => {
  const [createRestaurant, { loading, error }] = useMutation(CREATE_RESTAURANT_MUTATION, {
    onCompleted: () => {
      toast.success('Restaurant created')
      navigate(routes.restaurants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createRestaurant({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Restaurant</h2>
      </header>
      <div className="rw-segment-main">
        <RestaurantForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRestaurant
