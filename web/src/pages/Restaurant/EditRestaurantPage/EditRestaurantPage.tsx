import EditRestaurantCell from 'src/components/Restaurant/EditRestaurantCell'

type RestaurantPageProps = {
  id: number
}

const EditRestaurantPage = ({ id }: RestaurantPageProps) => {
  return <EditRestaurantCell id={id} />
}

export default EditRestaurantPage
