// Jewelery component 
// here fetching the product from jewelery category

<template>
  <v-app>
    <Header />
    <!-- Jewelery card info -->
    <v-card class="d-flex flex-row flex-wrap" min-height="100vh">
      <!-- Loop on jewelery that are getting by fetching -->
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="jewelery in jewelerys"
        :key="jewelery.id"
      >
        <v-img contain :src="jewelery.image" :aspect-ratio="16 / 9"> </v-img>

        <v-card-title class="text-justify font-weight-light subheading">
          <router-link
            class="text black--text textDecor"
            :to="{ name: 'product', params: { id: jewelery.id } }"
          >
            {{ jewelery.title }}
          </router-link>
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
          <!-- product category -->
          <div class="my-4 text-justify">category: {{ jewelery.category }}</div>
          <div class="mb-4 mt-4 amber--text">${{ jewelery.price }}</div>
          <div class="mb-10 text-justify">
            {{ jewelery.description }}
          </div>
        </v-card-text>
        <!-- Button to add cart -->
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
    </v-card>
    <Footer />
  </v-app>
</template>


<script>
// importing header and footer here //  Axios also for fetching
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
Vue.use(VueAxios, axios);

export default {
  name: "jewelery",
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      jewelerys: [],
    };
  },

  // fetching the specific (jewelery category from an api)
  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        (this.jewelerys = response.data), console.log(response.data);
      });
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style scoped>
.textDecor {
  text-decoration: none;
}
</style>



