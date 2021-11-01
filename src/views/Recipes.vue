<template>
  <div>
    <h1>Recipes View</h1>
  </div>
</template>

<script>
export default {
  created() {
    let res = await this.$store.dispatch("getItems");
    console.log(res)
  },
}
</script>

<style>

</style>