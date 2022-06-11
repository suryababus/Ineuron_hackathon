import { render } from '@redwoodjs/testing/web'

import OrderSuccessPage from './OrderSuccessPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrderSuccessPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderSuccessPage />)
    }).not.toThrow()
  })
})
