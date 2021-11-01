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

<style scoped lang="scss">
@import "@/assets/styling/base/main.scss";
</style>

