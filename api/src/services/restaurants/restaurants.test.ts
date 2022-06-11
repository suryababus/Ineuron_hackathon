import {
  restaurants,
  restaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} from './restaurants'
import type { StandardScenario } from './restaurants.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('restaurants', () => {
  scenario('returns all restaurants', async (scenario: StandardScenario) => {
    const result = await restaurants()

    expect(result.length).toEqual(Object.keys(scenario.restaurant).length)
  })

  scenario(
    'returns a single restaurant',
    async (scenario: StandardScenario) => {
      const result = await restaurant({ id: scenario.restaurant.one.id })

      expect(result).toEqual(scenario.restaurant.one)
    }
  )

  scenario('deletes a restaurant', async (scenario: StandardScenario) => {
    const original = await deleteRestaurant({ id: scenario.restaurant.one.id })
    const result = await restaurant({ id: original.id })

    expect(result).toEqual(null)
  })
})
