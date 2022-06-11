import { Button, CardActions, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useContext } from 'react'
import { CartContext, CartItem } from 'src/state/cartState'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'

const OrderSummaryPage = () => {
  const cart = useContext(CartContext)

  let total = 0
  cart.cartItems.forEach((item) => {
    total = total + item.count * item.menu.price
  })
  return (
    <Container maxWidth="sm">
      <div
        style={{
          flex: 1,
          height: '100vh',
        }}
      >
        <MetaTags title="OrderSummary" description="OrderSummary page" />

        {cart.cartItems.map((items) => {
          return LineItemCard(items)
        })}

        <div>
          <Typography
            variant="body2"
            style={{
              textAlign: 'end',
              margin: '24px',
              fontWeight: 600,
            }}
          >
            Bill Total: ₹{total}
          </Typography>
        </div>
        <Button
          fullWidth
          variant="contained"
          style={{
            margin: 'auto',
            maxWidth: 350,
            display: 'flex'
          }}
        >
          Place Order
        </Button>
      </div>
    </Container>
  )
}

export default OrderSummaryPage
function LineItemCard(items: CartItem): JSX.Element {
  const cart = useContext(CartContext)

  return (
    <div
      style={{
        flexDirection: 'row',
        display: 'flex',
        margin: 8,
        padding: 16,
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
      }}
    >
      <img
        src={items.menu.image_url}
        style={{
          width: '20%',
          marginRight: 8,
        }}
      />
      <div style={{ flex: 1 }}>
        <Typography variant="body1">{items.menu.item_name}</Typography>
        <Typography variant="body2">₹ {items.menu.price}</Typography>
      </div>
      <div style={{ alignSelf: 'center' }}>
        <CardActions
          style={{
            padding: '0',
            boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
          }}
        >
          <IconButton
            size="small"
            style={{ marginRight: 4, padding: '0' }}
            onClick={() => cart.addItem(items.menu)}
          >
            <AddOutlinedIcon />
          </IconButton>
          <Typography variant="body2">{items.count}</Typography>
          <IconButton
            size="small"
            style={{ marginLeft: 4, padding: '0' }}
            onClick={() => cart.removeItem(items.menu)}
          >
            <RemoveOutlinedIcon />
          </IconButton>
        </CardActions>
        <Typography variant="body2" style={{ textAlign: 'end' }}>
          ₹{items.count * items.menu.price}
        </Typography>
      </div>
    </div>
  )
}
