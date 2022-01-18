<template>
  <div>
    <ul v-if="!error">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
    <div v-else>
      {{ error }}
    </div>
    <div v-for="(o,idx) in obj" :key="idx">{{ o }}</div>
  </div>
</template>

<script>
import { getAllPosts } from "../apis/posts";

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
  },
  async mounted() {
    await this.getPosts();
  },
};
</script>
