import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'

import UsingStore from '@/components/UsingStore.vue'
import { INCREMENT_COUNTER } from '@/store/mutations'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('UsingStore.vue', () => {
  let mutations;
  let store;
  let options;
  let state;

  beforeEach(() => {
    mutations = {
      [INCREMENT_COUNTER]: jest.fn()
    }

    state = {
      counter: 0
    }

    store = new Vuex.Store({
      state,
      mutations
    })

    options = {
      localVue,
      store
    }
  })

  describe('increment', () => {
    it('calls mutations and logs on increment if counter < 5', () => {
      //* arrange
      const wrapper = shallowMount(UsingStore, options)
      const logSpy = jest.spyOn(console, 'log').mockImplementationOnce(() => {})
      
      //* act
      wrapper.vm.increment()

      //* assert
      expect(logSpy).toHaveBeenNthCalledWith(1, 'INCREMENTED')
      expect(mutations[INCREMENT_COUNTER]).toHaveBeenCalled()
    })

    it('doesn\'t call mutation if counter >= 5', () => {
      //* arrange
      state.counter = 5
      const wrapper = shallowMount(UsingStore, options)

      //* act
      wrapper.vm.increment()

      //* assert
      expect(mutations[INCREMENT_COUNTER]).not.toHaveBeenCalled()
    })
  })

  describe('unique button', () => {
    it('emits be-unique event on click', async () => {
      //* arrange
      const wrapper = mount(UsingStore, options)
      const button = wrapper.getComponent('.unique')

      //* act
      button.trigger('click')

      //* assert
      // si l'evenement 'be-unique' a été émis
      expect(wrapper.emitted('be-unique').length).toBe(1)
      // combien de fois l'evenement 'be-unique' a été émis
      expect(wrapper.emitted('be-unique').length).toBe(1)
      // vérifier le paylod émis avec l'evenement
      expect(wrapper.emitted('be-unique')[0]).toEqual(['zéro originalité'])
    })
  })
})