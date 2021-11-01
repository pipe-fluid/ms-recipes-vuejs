<template>
  <div id="app">
    <Recipes />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    Recipes: () => import("./views/Recipes.vue"),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
