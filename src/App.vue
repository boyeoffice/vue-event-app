<template>
  <div id="app">
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { User } from "@/types";
// import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App" as string,
  components: {
    // HelloWorld
  },
  data() {
    return {
      user: {} as User // Declare reactive data as type User
    };
  },
  mounted() {
    this.user = {
      firstName: "Olakunle",
      lastName: "Boye",
      twitterHandle: "@dev_boye",
      location: {
        city: "Ikeja",
        state: "Lagos"
      }
    };
  },
  computed: {
    fullName(): string {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
