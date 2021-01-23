<template>
  <div>
    <Main/>
  </div>
</template>
<script>

import Main from '@/view/Main'
export default {
  name: 'App',
  components: { Main }
}
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
