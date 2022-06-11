import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CategoryPage = () => {
  return (
    <>
      <MetaTags title="Category" description="Category page" />

      <h1>CategoryPage</h1>
      <p>
        Find me in <code>./web/src/pages/CategoryPage/CategoryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>category</code>, link to me with `
        <Link to={routes.category()}>Category</Link>`
      </p>
    </>
  )
}

export default CategoryPage
