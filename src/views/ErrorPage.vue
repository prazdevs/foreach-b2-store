<template>
  <div>
    <div>Oops, il y a eu un problème.</div>
    <div v-if="$route.query.error">
      {{ $route.query.error }}
    </div>
  </div>
  
</template>

<script>
export default {
  mounted() {
    console.log(this.$route);
  }
}
</script>