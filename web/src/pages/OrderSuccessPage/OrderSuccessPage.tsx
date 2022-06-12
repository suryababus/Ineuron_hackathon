import { Typography } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'

const OrderSuccessPage = () => {
  useEffect(() => {
    localStorage.setItem('cart_items', '[]')
  }, [])
  return (
    <>
      <MetaTags title="OrderSuccess" description="OrderSuccess page" />
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
        }}
      >
        <Typography variant="h4">OrderSuccess</Typography>
        <Typography variant="body1">
          You will be redirected to home screen in a minute.
        </Typography>
      </div>
    </>
  )
}

export default OrderSuccessPage
