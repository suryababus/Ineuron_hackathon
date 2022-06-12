import { Container, Typography } from '@mui/material'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminHomePage = () => {
  return (
    <>
      <MetaTags title="AdminHome" description="AdminHome page" />

      <Container maxWidth="md">
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {ImageButton(
            'https://www.restaurantfurnitureindia.com/img/og/restaurant-tables.jpg',
            'Tables',
            () => navigate('/admin/restaurant-tables')
          )}
          {ImageButton(
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScgWj7Er6M0eIWKtExTRC1mbbYsxDQnwo9Xg&usqp=CAU',
            'Menus',
            () => navigate('/admin/menus')
          )}
          {ImageButton(
            'https://www.homestratosphere.com/wp-content/uploads/2020/05/food-variety-may172019-min.jpg',
            'Categories',
            () => navigate('/admin/categories')
          )}
        </div>
      </Container>
    </>
  )
}

export default AdminHomePage
function ImageButton(url: string, label: string, onClick: () => void) {
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2E294E',
        margin: '8px',
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`
      }}
      onClick={onClick}
    >
      <img
        src={url}
        style={{
          width: '400px',
          height: '300px',
        }}
      />
      <Typography
        variant="h6"
        style={{ textAlign: 'center', padding: '16px', color: '#fff' }}
      >
        {label}
      </Typography>
    </div>
  )
}
