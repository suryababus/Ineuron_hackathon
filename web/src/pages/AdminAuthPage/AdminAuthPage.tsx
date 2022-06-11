import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AdminAuthPage = () => {
  return (
    <>
      <MetaTags title="AdminAuth" description="AdminAuth page" />

      <h1>AdminAuthPage</h1>
      <p>
        Find me in <code>./web/src/pages/AdminAuthPage/AdminAuthPage.tsx</code>
      </p>
      <p>
        My default route is named <code>adminAuth</code>, link to me with `
        <Link to={routes.adminAuth()}>AdminAuth</Link>`
      </p>
    </>
  )
}

export default AdminAuthPage
