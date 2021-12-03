//  this component is the parent of product card and passing 
// passing the products to products page

<template>
  <!-- parent of productcard -->
  <v-app>
    <v-card class="d-flex flex-row flex-wrap" outlined color="transparent">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </v-card>
  </v-app>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>