import { shallowMount } from '@vue/test-utils'
import AnimeList from '../../src/components/AnimeList.vue'

describe('AnimeList.vue', () => {
  it('renders component', () => {
    const wrapper = shallowMount(AnimeList, {
      stubs: ['v-client-table'],
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  })
})
