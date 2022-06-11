import {
  restaurantTables,
  restaurantTable,
  createRestaurantTable,
  updateRestaurantTable,
  deleteRestaurantTable,
} from './restaurantTables'
import type { StandardScenario } from './restaurantTables.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('restaurantTables', () => {
  scenario(
    'returns all restaurantTables',
    async (scenario: StandardScenario) => {
      const result = await restaurantTables()

      expect(result.length).toEqual(
        Object.keys(scenario.restaurantTable).length
      )
    }
  )

  scenario(
    'returns a single restaurantTable',
    async (scenario: StandardScenario) => {
      const result = await restaurantTable({
        id: scenario.restaurantTable.one.id,
      })

      expect(result).toEqual(scenario.restaurantTable.one)
    }
  )

  scenario('creates a restaurantTable', async () => {
    const result = await createRestaurantTable({
      input: { restaurant_id: 2592714, table_no: 'String', available: true },
    })

    expect(result.restaurant_id).toEqual(2592714)
    expect(result.table_no).toEqual('String')
    expect(result.available).toEqual(true)
  })

  scenario('updates a restaurantTable', async (scenario: StandardScenario) => {
    const original = await restaurantTable({
      id: scenario.restaurantTable.one.id,
    })
    const result = await updateRestaurantTable({
      id: original.id,
      input: { restaurant_id: 9954533 },
    })

    expect(result.restaurant_id).toEqual(9954533)
  })

  scenario('deletes a restaurantTable', async (scenario: StandardScenario) => {
    const original = await deleteRestaurantTable({
      id: scenario.restaurantTable.one.id,
    })
    const result = await restaurantTable({ id: original.id })

    expect(result).toEqual(null)
  })
})
