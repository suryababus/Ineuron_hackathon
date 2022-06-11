import { render } from '@redwoodjs/testing/web'

import AdminTablesPage from './AdminTablesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminTablesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminTablesPage />)
    }).not.toThrow()
  })
})
