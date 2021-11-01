<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Know More
        </v-btn>
      </template>

      <v-card>
        <!-- Title -->
        <v-card-title class="text-h5 grey lighten-2">
          {{ recipes.title }}
        </v-card-title>
        <!-- Picture -->
        <v-img :src="photoUrl[recipes.photo.sys.id]" class="img-fluid"></v-img>
        <v-divider></v-divider>
        <br>
        <!-- Marked down description -->
        <v-card-text v-html="markDown"> </v-card-text>
        <!-- Calories -->
        <v-card-text> Calories: {{ recipes.calories }} kcal </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false"> Return</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import marked from "marked";
export default {
  name: "Details",
  props: ["recipes", "photoUrl"],
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    markDown() {
      return marked(this.recipes.description);
    },
  },
};
</script>
