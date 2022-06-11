import RestaurantTableCell from 'src/components/RestaurantTable/RestaurantTableCell'

type RestaurantTablePageProps = {
  id: number
}

const RestaurantTablePage = ({ id }: RestaurantTablePageProps) => {
  return <RestaurantTableCell id={id} />
}

export default RestaurantTablePage
