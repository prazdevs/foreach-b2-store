import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'

import Posts from '@/views/Posts.vue'
import { deletePost, getAllPosts } from '@/apis/posts'

const localVue = createLocalVue()
localVue.use(VueRouter)

jest.mock('@/apis/posts', () => ({
  getAllPosts: jest.fn(async () => {
    return Promise.resolve([
      { title: 'post1', body: 'lorem' }, 
      { title: 'post2', body: 'ipsum' }
    ])
  }),
  deletePost: jest.fn(async () => {
    return Promise.resolve()
  })
}))

let options;

beforeEach(() => {
  options = { localVue }
})

describe('¨Posts.vue', () => {
  describe('getPosts', () => {
    it('fetches and sets posts on 200', async () => {
      //* arrange
      const wrapper = shallowMount(Posts, options)

      //* act
      await wrapper.vm.getPosts()

      //* assert
      expect(getAllPosts).toHaveBeenCalled()
      expect(wrapper.vm.posts).toEqual([
        { title: 'post1', body: 'lorem' }, 
        { title: 'post2', body: 'ipsum' }
      ])
    })

    it('sets error on API error', async () => {
      //* arrange
      const wrapper = shallowMount(Posts, options)
      getAllPosts.mockImplementationOnce(async () => Promise.reject('no post'))
      
      //* act
      await wrapper.vm.getPosts()

      //* assert
      expect(getAllPosts).toHaveBeenCalled()
      expect(wrapper.vm.error).toEqual('no post')
    })
  })

  describe('deletePost', () => {
    it('deletes given post', async () => {
      //* arrange
      const wrapper = shallowMount(Posts, options)

      //* act
      await wrapper.vm.deletePost(1)

      //* assert
      expect(deletePost).toHaveBeenCalledWith(1)
    })

    it('sets error on API error', async () => {
      //* arrange
      const wrapper = shallowMount(Posts, options)
      deletePost.mockImplementationOnce(async () => Promise.reject('could not delete'))

      //* act
      await wrapper.vm.deletePost(1)

      //* assert
      expect(deletePost).toHaveBeenCalledWith(1)
      expect(wrapper.vm.error).toEqual('could not delete')
    })
  })
})