<template>
  <div id="nav" v-if="login">
    <Header />
  </div>
  <router-view :key="$route.fullPath"/>
</template>

<script>
import Header from "./components/Header.vue"
import setMeta from '@/store/modules/setMeta'

export default {
  setup() {
  },
  components: {
    Header
  },
  beforeCreate() {
    setMeta({
      title: 'ENJOY DEV',
      description: '프론트엔드 개발 블로그',
      path: this.$route.path,
      keywords: 'blog, frontend, vue3, vueCLI4'
    })
  },
  beforeUpdate() {
    if (this.$route.fullPath === '/login' || this.$route.fullPath === '/') {
      this.login = false
    } else {
      this.login = true
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/reset.scss";
@import "@/assets/scss/layout.scss";

/*
font-family: 'NanumSquareLight', sans-serif;
font-family: 'NanumSquare', sans-serif;
font-family: 'NanumSquareBold', sans-serif;
font-family: 'NanumSquareExtraBold', sans-serif;
font-family: 'NanumSquareAcb', sans-serif;
font-family: 'NanumSquareAceb', sans-serif;
font-family: 'NanumSquareAcl', sans-serif;
font-family: 'NanumSquareAcr', sans-serif;
*/

#app {
  font-family: 'NanumSquare';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
