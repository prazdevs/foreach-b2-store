import { shallowMount } from '@vue/test-utils'
import CustomMessage from '@/components/CustomMessage.vue'

describe('CustomMessage.vue', () => {
  it('renders props.msg when passed', () => {
    //* arrange
    const msg = 'new message'

    //* act
    const wrapper = shallowMount(CustomMessage, {
      propsData: { msg }
    })

    //* assert
    expect(wrapper.text()).toMatch(msg)
  })

  describe('sum', () => {
    it('sums 2 numbers', () => {
      //* arrange
      const wrapper = shallowMount(CustomMessage)

      //* act
      const result = wrapper.vm.sum(2, 3)

      //* assert
      expect(result).toBe(5)
    })

    it('concatenates 2 strings', () => {
      //* arrange
      const wrapper = shallowMount(CustomMessage)

      //* act
      const result = wrapper.vm.sum('hello', 'world')

      //* assert
      expect(result).toBe('helloworld')
    })
  })

  describe('increment', () => {
    it('increments counter', () => {
      //* arrange
      const wrapper = shallowMount(CustomMessage)
      const initial = wrapper.vm.counter

      //* act
      wrapper.vm.increment()

      //* assert
      expect(wrapper.vm.counter).toBe(initial + 1)
    })
  })

  describe('fullName', () => {
    it('returns full name from first and last', () => {
      //* arrange
      const firstName = 'lorem'
      const lastName = 'ipsum'
      const wrapper = shallowMount(CustomMessage, {
        propsData: { firstName, lastName }
      })

      //* assert
      expect(wrapper.vm.fullName).toBe(firstName + ' ' + lastName)
    })
  })

  describe('fullNameObject', () => {
    it('returns fullname as object', () => {
      //* arrange
      const firstName = 'lorem'
      const lastName = 'ipsum'
      const wrapper = shallowMount(CustomMessage, {
        propsData: { firstName, lastName }
      })

      //* assert
      expect(wrapper.vm.fullNameObject).toEqual({ first: firstName, last: lastName})
    })
  })
})
