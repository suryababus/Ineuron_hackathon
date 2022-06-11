import EditRestaurantTableCell from 'src/components/RestaurantTable/EditRestaurantTableCell'

type RestaurantTablePageProps = {
  id: number
}

const EditRestaurantTablePage = ({ id }: RestaurantTablePageProps) => {
  return <EditRestaurantTableCell id={id} />
}

export default EditRestaurantTablePage
