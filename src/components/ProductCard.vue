// In this component we are fetcching all the products from fake apistore
// And passing it to the product card

<template>
  <!-- hover effect on  -->

  <v-hover v-slot="{ hover }" class="my-5">
    <v-card
      id="my-card"
      class="mx-auto my-12"
      max-width="270"
      color="transparent"
    >
      <v-img contain :src="product.image" :aspect-ratio="16 / 9">
        <v-expand-transition>
          <div
            v-if="hover"
            class="
              d-flex
              transition-fast-in-fast-out
              red
              v-card--reveal
              text-h2
              white--text
            "
            style="height: 100%"
          >
            ${{ product.price }}
          </div>
        </v-expand-transition>
      </v-img>

      <!-- product title -->
      <v-card-title class="text-justify subheading font-weight-light">
        <router-link
          class="text black--text textDecor"
          :to="{ name: 'product', params: { id: product.id } }"
        >
          {{ product.title }}
        </router-link>
      </v-card-title>

      <!-- product description -->

      <v-card-text>
        <v-row align="center" class="mx-0"> </v-row>
        <!-- product category -->
        <div class="my-4 text-justify">category: {{ product.category }}</div>
        <div class="mb-4 mt-4 amber--text">${{ product.price }}</div>
        <div class="mb-10 text-justify">
          {{ product.description }}
        </div>
      </v-card-text>

      <!-- add cart button -->
      <div class="d-flex justify-end align-end">
        <v-btn
          class="red"
          block
          absolute
          bottom
          outlined
          @click="addToCart()"
          color="white"
        >
          <v-icon left color="white">mdi-cart</v-icon>
          Add to Cart
        </v-btn>
      </div>
    </v-card>
  </v-hover>
</template>


<script>
export default {
  name: "productcard",
  props: ["product"],
  data: () => {
    return {
      loading: false,
      selection: 1,
    };
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    addToCart() {
      this.$store.dispatch("addProductToCart", {
        product: this.product,
        quantity: 1,
      });
    },
  },
};
</script>


<style scoped>
.v-card--reveal {
  align-items: center;

  bottom: 0;

  justify-content: center;

  opacity: 0.8;

  position: absolute;

  width: 100%;
}

.textDecor {
  text-decoration: none;
}
</style>
