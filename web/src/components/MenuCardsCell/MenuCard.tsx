import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import { CartContext } from 'src/state/cartState'

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean
}
interface Menu {
  id: number
  item_name?: string | null
  category_id: number
  cuisine_id: number
  restaurant_id: number
  image_url?: string
  price: number
}

interface Props {
  menu: Menu
}
export default function MenuCard({ menu }: Props) {
  const cart = React.useContext(CartContext)
  let addedCount = 0
  try{
    addedCount = cart?.cartItems?.filter(
      (item) => item.menu.id === menu.id
    )[0]?.count || 0
  } catch(e) {

  }

  return (
    <Card sx={{ width: 345, margin: '8px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {menu.item_name[0]}
          </Avatar>
        }
        title={menu.item_name}
        subheader={''}
      />
      <CardMedia
        component="img"
        height="194"
        image={menu.image_url}
        alt="Paella dish"
      />
      <CardActions
        style={{
          justifyContent: 'flex-end',
          margin: '8px',
        }}
      >
        <IconButton style={{ marginRight: 4 }} onClick={() => cart.addItem(menu)}>
          <AddOutlinedIcon />
        </IconButton>
        <Typography variant="h6">{addedCount}</Typography>
        <IconButton style={{ marginLeft: 4 }} onClick={() => cart.removeItem(menu)}>
          <RemoveOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
