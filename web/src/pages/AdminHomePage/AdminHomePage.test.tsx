import { render } from '@redwoodjs/testing/web'

import AdminHomePage from './AdminHomePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminHomePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminHomePage />)
    }).not.toThrow()
  })
})
