import { shallowMount } from '@vue/test-utils'

import Post from '@/views/Post.vue'
import { getPost } from '@/apis/posts'
import { ERROR } from '@/router/names'

let options;

jest.mock('@/apis/posts', () => ({
  getPost: jest.fn(async () => Promise.resolve({ title: 'titre', body: 'corps' }))
}))

beforeEach(() => {
  options = {
    mocks: {
      $route: {
        params: {
          id: 1
        },
      },
      $router: {
        go: jest.fn(),
        push: jest.fn(),
      }
    }
  }
})

describe('Post.vue', () => {
  describe('goBack', () => {
    it('calls router to go back', () => {
      //* arrange
      const wrapper = shallowMount(Post, options)

      //* act
      wrapper.vm.goBack()

      //* assert
      expect(wrapper.vm.$router.go).toHaveBeenCalledWith(-1)
    })
  })

  describe('getCurrentPost', () => {
    it('sets post if api call succeeds', async () => {
      //* arrange
      const wrapper = shallowMount(Post, options)

      //* act
      await wrapper.vm.getCurrentPost()

      //* assert
      expect(wrapper.vm.post).toEqual({ title: 'titre', body: 'corps' })
      expect(getPost).toHaveBeenCalledWith(1)
    })

    it('redirects to ERROR page with message', async () => {
      //* arrange
      const wrapper = shallowMount(Post, options)
      getPost.mockImplementationOnce(async () => Promise.reject('error'))

      //* act
      await wrapper.vm.getCurrentPost()

      //*
      expect(wrapper.vm.$router.push).toHaveBeenCalledWith({ name: ERROR, query: { error: 'error' } })
    })
  })
})
