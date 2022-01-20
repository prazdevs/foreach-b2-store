<template>
  <div>
    <div>{{ $t('message') }}</div>
    <div>{{ $t('nested.message') }}</div>
    <v-btn @click="toggleLang">{{ $t('changeLangBtn') }}</v-btn>
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
  methods: {
    toggleLang() {
      if(this.$i18n.locale === 'fr') {
        this.$i18n.locale = 'en'
      } else {
        this.$i18n.locale = 'fr'
      }
    }
  }
}
</script>
