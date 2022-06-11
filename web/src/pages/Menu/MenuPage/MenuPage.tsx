import MenuCell from 'src/components/Menu/MenuCell'

type MenuPageProps = {
  id: number
}

const MenuPage = ({ id }: MenuPageProps) => {
  return <MenuCell id={id} />
}

export default MenuPage
