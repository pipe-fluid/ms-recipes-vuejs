<template>
  <v-container>
    <h1>Marley Spoon Recipes</h1>
    <!-- CARDS -->
    <v-card
      fluid
      class="card mx-auto flex"
      v-for="(item, index) in recipes"
      :key="index"
    >
      <v-card-title> {{ item.title }}</v-card-title>
      
      <v-img
        :src="photoUrl[item.photo.sys.id]"
        class="img-fluid"
        :key="index"
      ></v-img>

      <v-card-actions>
        <div data-app>
          <v-btn class="button" text v-bind:recipes="recipes">
            <Details :recipes="item" :photoUrl="photoUrl" />
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
      photoUrl: {}
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
          let id = res.items[i].fields.photo.sys.id;
          console.log(id)
          // await returns a string instead of promise
          this.photoUrl[id] = await this.getPhoto(res, id);
          console.log(this.photoUrl[id])
        }
      }
    },
    async getPhoto(res, id) {
      for (let i = 0; i < res.includes.Asset.length; i++) {
        let photo = res.includes.Asset[i];
        if (photo.sys.id == id) {
          return photo.fields.file.url;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/styling/views/recipes.scss";
</style>