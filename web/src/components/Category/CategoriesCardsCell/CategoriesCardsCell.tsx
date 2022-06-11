import type { FindCategories } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'
import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import { useState } from 'react'

export const QUERY = gql`
  query FindCategories {
    categories {
      id
      type
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories }: CellSuccessProps<FindCategories>) => {
  return (
    <Container maxWidth="md">
      {categories.map((item) => {
        return CategoryCard(item)
      })}
    </Container>
  )
}
function CategoryCard(item): JSX.Element {
  const [hover, setHover] = useState(false)
  return (
    <div
      style={{
        width: '300px',
        margin: '8px',
        display: 'inline-flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        transition: `all 0.3s cubic-bezier(.25,.8,.25,1)`,
        boxShadow: hover
          ? `0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)`
          : `0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)`,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={item.image_url} style={{ width: '300px' }} />
      <Typography
        variant="h5"
        style={{
          textAlign: 'center',
          padding: 16,
        }}
      >
        {item.type}
      </Typography>
    </div>
  )
}

export const CategoryCardsCell = () => {
  const { error, loading, data } = useQuery(QUERY)

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
