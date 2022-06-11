import type { FindMenus } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'
import { Button, Container } from '@mui/material'
import MenuCard from './MenuCard'
import { useContext } from 'react'
import { CartContext } from 'src/state/cartState'
import { navigate } from '@redwoodjs/router'
import Loading from '../Loading/Loading'

export const QUERY = gql`
  query FindMenus {
    menus {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
      image_url
      price
    }
  }
`

// export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ menus }: CellSuccessProps<FindMenus>) => {
  const cart = useContext(CartContext)

  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {menus.map((item) => {
        return <MenuCard menu={item} />
      })}

      <Button
        fullWidth
        variant="contained"
        style={{
          margin: 'auto',
          maxWidth: 350,
          position: 'fixed',
          bottom: '16px',
          left: 0,
          right: 0,
        }}
        onClick={() => navigate('/order-summary')}
      >
        Checkout ({cart.cartItems.length})
      </Button>
    </Container>
  )
}

export const MenuCardsCell = () => {
  const { error, loading, data } = useQuery(QUERY)
  return <Loading />

  if (error) {
    if (Failure) {
      return <Failure error={error} />
    } else {
      console.error(error)
    }
  } else if (loading) {
    return <Loading />
  } else if (data) {
    if (typeof Empty !== 'undefined' && !data) {
      return <Empty />
    } else {
      return <Success {...data} />
    }
  } else {
    throw 'Cannot render Cell: graphQL success but `data` is null'
  }
}
