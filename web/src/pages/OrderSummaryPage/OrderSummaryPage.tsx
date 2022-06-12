import { Button, CardActions, IconButton, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { useContext } from 'react'
import { CartContext, CartItem } from 'src/state/cartState'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined'
import { toast } from '@redwoodjs/web/dist/toast'
import { useAuth } from '@redwoodjs/auth'

const CREATE_ORDER_MUTATION = gql`
  mutation CreateOrderMutation($input: CreateOrderInput!, $tableId: Int!) {
    createOrder(input: $input) {
      id
    }
    updateRestaurantTable(id: $tableId, input: { available: false }) {
      id
    }
  }
`

const OrderSummaryPage = () => {
  const cart = useContext(CartContext)
  const { currentUser } = useAuth()
  const [createOrder, { loading, error }] = useMutation(CREATE_ORDER_MUTATION, {
    onCompleted: () => {
      toast.success('Order created')
      navigate('/order-success')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  let total = 0
  cart.cartItems.forEach((item) => {
    total = total + item.count * item.menu.price
  })
  const createFoodOrder = () => {
    let tableId =  localStorage.getItem('tableId')
    if(!tableId){
      toast.error('Scan the table first')
      return 
    }
    createOrder({
      variables: {
        input: {
          status: 'processing',
          user_id: currentUser.id,
          restaurant_id: 1,
          total_price: total,
          table_id: parseInt(tableId)
        },
        tableId: parseInt(tableId)
      },
    })
  }
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
            display: 'flex',
          }}
          onClick={createFoodOrder}
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
