import { Button, Typography } from "@mui/material"
import { useAuth } from "@redwoodjs/auth"

interface Props {
  children: React.ReactChildren | React.ReactChild[]
}

export const TopBar = ({ children }: Props) => {
    const { logOut } = useAuth()
  return (
    <>
    <div style={{
        flex: 1,
        boxShadow: `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
        padding: '16px',
        display: 'flex',
        marginBottom: '8px'
    }}>
        <Typography variant="h5" fontFamily={'fantasy'}>
            Food-Dine
        </Typography>
        <div style={{
            display: 'flex',
            flex: 1
        }}>

        </div>
      <Button variant="contained" onClick={() => logOut()}>
          Log Out
      </Button>
    </div>
      {children}
    </>
  )
}
