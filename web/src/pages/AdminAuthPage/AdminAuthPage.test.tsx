import { render } from '@redwoodjs/testing/web'

import AdminAuthPage from './AdminAuthPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminAuthPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminAuthPage />)
    }).not.toThrow()
  })
})
