<template>
  <div>
    <router-link
      v-for="{ name, label } in routes"
      :to="{ name }"
      :key="name"
    >
      {{ label }}
    </router-link>
  </div>
</template>

<script>
import { POSTS, POSTFORM } from '../router/names'
export default {
  name: 'Home',
  data() {
    return {
      routes: [
        { name: POSTS, label: 'List de posts' },
        { name: POSTFORM, label: 'Ajout de post' },
      ],
    }
  },
}
</script>
