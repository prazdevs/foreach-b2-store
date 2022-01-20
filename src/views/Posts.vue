<template>
  <div>
    <ul v-if="!error">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: postRoute, params: { id: post.id }}">
          {{ post.title }}
        </router-link>
        <v-btn icon elevation="2" @click="deletePost(post.id)">
          <v-icon>
            mdi-delete
          </v-icon>
        </v-btn>
      </li>
    </ul>
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
import { POST } from '../router/names'
import { getAllPosts, deletePost } from "../apis/posts";

export default {
  data() {
    return {
      postRoute: POST,
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
