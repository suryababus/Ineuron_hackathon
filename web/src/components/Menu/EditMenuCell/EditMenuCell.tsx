import type { EditMenuById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MenuForm from 'src/components/Menu/MenuForm'

export const QUERY = gql`
  query EditMenuById($id: Int!) {
    menu: menu(id: $id) {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
    }
  }
`
const UPDATE_MENU_MUTATION = gql`
  mutation UpdateMenuMutation($id: Int!, $input: UpdateMenuInput!) {
    updateMenu(id: $id, input: $input) {
      id
      item_name
      category_id
      cuisine_id
      restaurant_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ menu }: CellSuccessProps<EditMenuById>) => {
  const [updateMenu, { loading, error }] = useMutation(UPDATE_MENU_MUTATION, {
    onCompleted: () => {
      toast.success('Menu updated')
      navigate(routes.menus())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMenu({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Menu {menu.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MenuForm menu={menu} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
