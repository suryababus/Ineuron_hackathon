import { menus, menu, createMenu, updateMenu, deleteMenu } from './menus'
import type { StandardScenario } from './menus.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('menus', () => {
  scenario('returns all menus', async (scenario: StandardScenario) => {
    const result = await menus()

    expect(result.length).toEqual(Object.keys(scenario.menu).length)
  })

  scenario('returns a single menu', async (scenario: StandardScenario) => {
    const result = await menu({ id: scenario.menu.one.id })

    expect(result).toEqual(scenario.menu.one)
  })

  scenario('creates a menu', async (scenario: StandardScenario) => {
    const result = await createMenu({
      input: {
        category_id: 7538668,
        cuisine_id: 36400,
        restaurant_id: scenario.menu.two.restaurant_id,
        price: 4682222.076254163,
      },
    })

    expect(result.category_id).toEqual(7538668)
    expect(result.cuisine_id).toEqual(36400)
    expect(result.restaurant_id).toEqual(scenario.menu.two.restaurant_id)
    expect(result.price).toEqual(4682222.076254163)
  })

  scenario('updates a menu', async (scenario: StandardScenario) => {
    const original = await menu({ id: scenario.menu.one.id })
    const result = await updateMenu({
      id: original.id,
      input: { category_id: 4229502 },
    })

    expect(result.category_id).toEqual(4229502)
  })

  scenario('deletes a menu', async (scenario: StandardScenario) => {
    const original = await deleteMenu({ id: scenario.menu.one.id })
    const result = await menu({ id: original.id })

    expect(result).toEqual(null)
  })
})
