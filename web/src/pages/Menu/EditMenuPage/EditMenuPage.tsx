import EditMenuCell from 'src/components/Menu/EditMenuCell'

type MenuPageProps = {
  id: number
}

const EditMenuPage = ({ id }: MenuPageProps) => {
  return <EditMenuCell id={id} />
}

export default EditMenuPage
