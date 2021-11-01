import { shallowMount } from '@vue/test-utils'
import Recipes from '@/views/Recipes.vue'

// Test if Recipes is a Vue Instance
describe('Recipes component unit test', () => {
  test('is a vue instance', () => {
    const wrapper = shallowMount(Recipes, {
      propsData: {
        recipe: {
          name: "Recipe view"
        }
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })
})
