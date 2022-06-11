import { Table, TableRow } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminTablesPage = () => {
  return (
    <>
      <MetaTags title="AdminTables" description="AdminTables page" />
      <Table>
        <TableRow>
          Table
        </TableRow>
      </Table>
      
    </>
  )
}

export default AdminTablesPage
