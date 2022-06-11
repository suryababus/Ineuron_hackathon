import { Button, Container, Input, TextField, Typography } from '@mui/material'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminAuthPage = () => {
  return (
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
        <h1>Restaurant</h1>
        <h2>Login</h2>
        <Typography
          variant="body1"
          component="h2"
          style={{
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          Please enter your mobile number and verify OTP.
        </Typography>
        <TextField
          variant="filled"
          label="Mobile Number"
          color="secondary"
          focused
          style={{
            marginBottom: '32px',
          }}
        />
        <Button onClick={() => navigate('/admin/home')} variant="contained">
          Sent OTP
        </Button>
      </div>
    </Container>
  )
}

export default AdminAuthPage
