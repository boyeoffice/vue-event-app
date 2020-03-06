<template>
  <div>
    <navbar />
  </div>
</template>

<script lang="ts">
  import Navbar from './components/Navbar'
  import Vue from 'vue'
  export default Vue.extend({
    name: 'App',
    components: {
      Navbar
    }
  })
</script>