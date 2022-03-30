<template>
  <div id="nav" v-if="login">
    <Header />
  </div>
  <router-view :key="$route.fullPath"/>
</template>

<script>
import Header from "./components/Header.vue"

export default {
  components: {
    Header
  },
  beforeUpdate() {
    if (this.$route.fullPath === '/login') {
      this.login = false
    } else {
      this.login = true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
