<template>
<div>This is the home page
  <custom-button @click="logClick">hello</custom-button>
</div>
</template>

<script>
import CustomButton from "../components/CustomButton"

export default {
  components: { 
    CustomButton
  },
  methods: {
    logClick() {
      console.log('clicked');
    }
  }
}
</script>