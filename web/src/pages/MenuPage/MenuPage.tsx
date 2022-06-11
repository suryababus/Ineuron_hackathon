import { Button } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useContext } from 'react'
import { MenuCardsCell } from 'src/components/MenuCardsCell/MenuCardsCell'
import { CartContext } from 'src/state/cartState'
interface Props {
  id: number
}
const MenuPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="Menu" description="Menu page" />

      <MenuCardsCell />
    </>
  )
}

export default MenuPage
