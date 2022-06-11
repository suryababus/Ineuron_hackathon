import { render } from '@redwoodjs/testing/web'

import OrderSummaryPage from './OrderSummaryPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OrderSummaryPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OrderSummaryPage />)
    }).not.toThrow()
  })
})
