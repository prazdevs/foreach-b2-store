<template>
  <div>
    <ul v-if="!error">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
        <button @click="deletePost(post.id)">X</button>
      </li>
    </ul>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { getAllPosts, deletePost } from "../apis/posts";

export default {
  data() {
    return {
      posts: [],
      error: "",
    };
  },
  methods: {
    async getPosts() {
      try {
        this.posts = await getAllPosts();
      } catch (e) {
        this.error = e;
      }
    },
    async deletePost(id) {
      try {
        await deletePost(id)
      } catch (e) {
        // this.error = e;
      }
    }
  },
  async mounted() {
    await this.getPosts();
  },
};
</script>
