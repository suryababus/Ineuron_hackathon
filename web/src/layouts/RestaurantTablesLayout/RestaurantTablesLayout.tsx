import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RestaurantTableLayoutProps = {
  children: React.ReactNode
}

const RestaurantTablesLayout = ({ children }: RestaurantTableLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.restaurantTables()}
            className="rw-link"
          >
            RestaurantTables
          </Link>
        </h1>
        <Link
          to={routes.newRestaurantTable()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New RestaurantTable
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RestaurantTablesLayout
