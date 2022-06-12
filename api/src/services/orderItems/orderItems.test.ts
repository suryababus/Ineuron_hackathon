import {
  orderItems,
  orderItem,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from './orderItems'
import type { StandardScenario } from './orderItems.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('orderItems', () => {
  scenario('returns all orderItems', async (scenario: StandardScenario) => {
    const result = await orderItems()

    expect(result.length).toEqual(Object.keys(scenario.orderItem).length)
  })

  scenario('returns a single orderItem', async (scenario: StandardScenario) => {
    const result = await orderItem({ id: scenario.orderItem.one.id })

    expect(result).toEqual(scenario.orderItem.one)
  })

  scenario('creates a orderItem', async () => {
    const result = await createOrderItem({
      input: {
        category_id: 1383853,
        price: 2256733.26317805,
        order_id: 2293367,
      },
    })

    expect(result.category_id).toEqual(1383853)
    expect(result.price).toEqual(2256733.26317805)
    expect(result.order_id).toEqual(2293367)
  })

  scenario('updates a orderItem', async (scenario: StandardScenario) => {
    const original = await orderItem({ id: scenario.orderItem.one.id })
    const result = await updateOrderItem({
      id: original.id,
      input: { category_id: 2552678 },
    })

    expect(result.category_id).toEqual(2552678)
  })

  scenario('deletes a orderItem', async (scenario: StandardScenario) => {
    const original = await deleteOrderItem({ id: scenario.orderItem.one.id })
    const result = await orderItem({ id: original.id })

    expect(result).toEqual(null)
  })
})
