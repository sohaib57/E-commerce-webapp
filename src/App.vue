// app.vue here all the pages and rendering 
// v-main is used to display all the pages/ components

<template>
  <!-- Main starts from here -->
  <v-main>
    <!-- here rendering all the components -->
    <router-view></router-view>
  </v-main>
</template>

<script>
export default {
  name: "App",
};
</script>

