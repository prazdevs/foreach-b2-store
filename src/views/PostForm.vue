<template>
  <div>
    <form @submit.prevent="addPost">
      <label>
        Title :
        <input v-model="title" required />
      </label>
      <label>
        Body :
        <textarea v-model="body" required />
      </label>
      <button type="submit">Ajouter le post</button>
    </form>
  </div>
</template>

<script>
import { createPost } from "../apis/posts"

export default {
  name: 'PostForm',
  data() {
    return {
      title: '',
      body: '',
    }
  },
  methods: {
    async addPost() {
      try {
        const post = {
          title: this.title,
          body: this.body,
          userId: 1,
        }
        const createdPost = await createPost(post)
        alert(`Le post ${createdPost.id} a été créé!`)
      } catch (error) {
        console.error(error);
      }
    }
  }
}
</script>
