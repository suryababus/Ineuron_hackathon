import { Container, Typography } from '@mui/material'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminHomePage = () => {
  return (
    <>
      <MetaTags title="AdminHome" description="AdminHome page" />

      <Container maxWidth="sm">
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
          }}
        >
          {ImageButton(
            'https://www.restaurantfurnitureindia.com/img/og/restaurant-tables.jpg',
            'Tables',
            () => navigate('/admin/restaurant-tables')
          )}
          {ImageButton(
            'https://www.restaurantware.com/media/wysiwyg/To_Go_Presentation_-_Full_Width.png',
            'Orders',
            () => navigate('/admin/login')
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
