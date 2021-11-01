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
          Testing Recipes
        </v-card-title>
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
export default {
  name: "Details",
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>

</style>