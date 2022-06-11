import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { MenuCardsCell } from 'src/components/MenuCardsCell/MenuCardsCell'

const MenuPage = () => {
  return (
    <>
      <MetaTags title="Menu" description="Menu page" />

      <MenuCardsCell />
    </>
  )
}

export default MenuPage
