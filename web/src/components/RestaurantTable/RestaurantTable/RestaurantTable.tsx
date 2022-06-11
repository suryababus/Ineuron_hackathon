import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_RESTAURANT_TABLE_MUTATION = gql`
  mutation DeleteRestaurantTableMutation($id: Int!) {
    deleteRestaurantTable(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const RestaurantTable = ({ restaurantTable }) => {
  const [deleteRestaurantTable] = useMutation(DELETE_RESTAURANT_TABLE_MUTATION, {
    onCompleted: () => {
      toast.success('RestaurantTable deleted')
      navigate(routes.restaurantTables())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete restaurantTable ' + id + '?')) {
      deleteRestaurantTable({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">RestaurantTable {restaurantTable.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{restaurantTable.id}</td>
            </tr><tr>
              <th>Restaurant id</th>
              <td>{restaurantTable.restaurant_id}</td>
            </tr><tr>
              <th>Table no</th>
              <td>{restaurantTable.table_no}</td>
            </tr><tr>
              <th>Available</th>
              <td>{checkboxInputTag(restaurantTable.available)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRestaurantTable({ id: restaurantTable.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(restaurantTable.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RestaurantTable
