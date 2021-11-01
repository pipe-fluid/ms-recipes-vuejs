<template>
  <v-container>
    <h1>Recipes</h1>
    <!-- CARDS -->
    <v-card
      fluid
      class="card mx-auto flex"
      v-for="(item, index) in recipes"
      :key="index"
    >
      <v-card-title> {{ item.title }}</v-card-title>
      
      <v-img src="https://images.ctfassets.net/kk2bw5ojx476/3TJp6aDAcMw6yMiE82Oy0K/2a4cde3c1c7e374166dcce1e900cb3c1/SKU1503_Hero_102__1_-6add52eb4eec83f785974ddeac3316b7.jpg"></v-img>

      <v-card-actions>
        <div data-app>
          <v-btn class="button" text v-bind:recipes="recipes">
            <Details />
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import Details from "../components/Details.vue"
export default {
  components: { Details },
  data() {
    return {
      recipes: [],
    };
  },
  async created() {
    this.getRecipes();
  },
  methods: {
    async getRecipes() {
      let res = await this.$store.dispatch("getItems");
      for (let i = 0; i < res.items.length; i++) {
        if (res.items[i].sys.contentType.sys.id == "recipe") {
          this.recipes.push(res.items[i].fields);
        }
      }
      console.log(res)
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styling/views/recipes.scss";
</style>