import type { FindMenus } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'
import { Container } from '@mui/material'
import MenuCard from './MenuCard'


export const QUERY = gql`
  query FindMenus {
    menus {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
      image_url
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ menus }: CellSuccessProps<FindMenus>) => {
  return (
    <Container maxWidth="md">
      {menus.map((item) => {
        return <MenuCard menu={item}/>
      })}
    </Container>
  )
}


export const MenuCardsCell = () => {
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
