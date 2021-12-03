// this page is the parent of all the products that are coming from productslist
<template>
  <v-app>
    <Header />
    <!-- parent of products list -->
    <div class="lighten-5">
      <ProductList />
    </div>
    <!-- Pagination -->
    <div class="text-center mx-auto mb-10">
      <v-pagination
        v-model="page"
        :length="15"
        :total-visible="7"
      ></v-pagination>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Products",
  data() {
    return {
      page: 1,
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
  components: {
    ProductList,
    Header,
    Footer,
  },
};
</script>

<style>
</style>