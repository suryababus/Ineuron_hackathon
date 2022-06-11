import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type RestaurantLayoutProps = {
  children: React.ReactNode
}

const RestaurantsLayout = ({ children }: RestaurantLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.restaurants()}
            className="rw-link"
          >
            Restaurants
          </Link>
        </h1>
        <Link
          to={routes.newRestaurant()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Restaurant
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default RestaurantsLayout
