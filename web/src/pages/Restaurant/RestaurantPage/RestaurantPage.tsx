import RestaurantCell from 'src/components/Restaurant/RestaurantCell'

type RestaurantPageProps = {
  id: number
}

const RestaurantPage = ({ id }: RestaurantPageProps) => {
  return <RestaurantCell id={id} />
}

export default RestaurantPage
