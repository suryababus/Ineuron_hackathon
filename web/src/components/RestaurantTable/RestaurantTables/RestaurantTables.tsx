import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, navigate, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/RestaurantTable/RestaurantTablesCell'

import QRCode from 'qrcode'
import { Button } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

const DELETE_RESTAURANT_TABLE_MUTATION = gql`
  mutation DeleteRestaurantTableMutation($id: Int!) {
    deleteRestaurantTable(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const RestaurantTablesList = ({ restaurantTables }) => {
  const [deleteRestaurantTable] = useMutation(
    DELETE_RESTAURANT_TABLE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RestaurantTable deleted')
      },
      onError: (error) => {
        toast.error(error.message)
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  )




  const onDeleteClick = (id) => {
    if (
      confirm('Are you sure you want to delete restaurantTable ' + id + '?')
    ) {
      deleteRestaurantTable({ variables: { id } })
    }
  }
  async function downloadQr(id) {
    var link = document.createElement("a");
    link.download = 'tableNo-'+id+'.jpg';
    link.href = await generateQR(id);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // delete link;
  }

  const generateQR = async (id) => {
  //  return QRCode.toDataURL('http://localhost:8910/login?tableId='+id)
   return QRCode.toDataURL('https://main--theservitor.netlify.app/login?tableId='+id)
      
  }
  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Restaurant id</th>
            <th>Table no</th>
            <th>Available</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {restaurantTables.map((restaurantTable) => (
            <tr key={restaurantTable.id}>
              <td>{truncate(restaurantTable.id)}</td>
              <td>{truncate(restaurantTable.restaurant_id)}</td>
              <td>{truncate(restaurantTable.table_no)}</td>
              <td>{checkboxInputTag(restaurantTable.available)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Button onClick={() => downloadQr(restaurantTable.id)}>
                    Download QR
                  </Button>
                  <Link
                    to={routes.restaurantTable({ id: restaurantTable.id })}
                    title={
                      'Show restaurantTable ' + restaurantTable.id + ' detail'
                    }
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRestaurantTable({ id: restaurantTable.id })}
                    title={'Edit restaurantTable ' + restaurantTable.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete restaurantTable ' + restaurantTable.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(restaurantTable.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantTablesList
