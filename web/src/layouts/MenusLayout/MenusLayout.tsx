import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type MenuLayoutProps = {
  children: React.ReactNode
}

const MenusLayout = ({ children }: MenuLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.menus()}
            className="rw-link"
          >
            Menus
          </Link>
        </h1>
        <Link
          to={routes.newMenu()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Menu
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default MenusLayout
