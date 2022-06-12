import type { EditRestaurantById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import RestaurantForm from 'src/components/Restaurant/RestaurantForm'

export const QUERY = gql`
  query EditRestaurantById($id: Int!) {
    restaurant: restaurant(id: $id) {
      id
      name
    }
  }
`
const UPDATE_RESTAURANT_MUTATION = gql`
  mutation UpdateRestaurantMutation($id: Int!, $input: UpdateRestaurantInput!) {
    updateRestaurant(id: $id, input: $input) {
      id
      name
    }
  }
`
import * as GifLoader from 'src/components/Loading/Loading'
export const Loading = () => <GifLoader.default />

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ restaurant }: CellSuccessProps<EditRestaurantById>) => {
  const [updateRestaurant, { loading, error }] = useMutation(UPDATE_RESTAURANT_MUTATION, {
    onCompleted: () => {
      toast.success('Restaurant updated')
      navigate(routes.restaurants())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateRestaurant({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Restaurant {restaurant.id}</h2>
      </header>
      <div className="rw-segment-main">
        <RestaurantForm restaurant={restaurant} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
