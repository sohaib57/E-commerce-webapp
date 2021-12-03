// men clothing card info 
<template>
  <v-app>
    <Header />
    <v-card class="d-flex flex-row flex-wrap" min-height="100vh">
      <!-- looping on menclothing card that are getting by fetching -->
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="menclothing in menclothings"
        :key="menclothing.id"
      >
        <v-img contain :src="menclothing.image" :aspect-ratio="16 / 9"> </v-img>

        <v-card-title class="text-justify font-weight-light subheading">
          <router-link
            class="text black--text textDecor"
            :to="{ name: 'product', params: { id: menclothing.id } }"
          >
            {{ menclothing.title }}
          </router-link>
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
          <!-- product category -->
          <div class="my-4 text-justify">
            category: {{ menclothing.category }}
          </div>
          <!-- product price -->
          <div class="mb-4 mt-4 amber--text">${{ menclothing.price }}</div>
          <!-- product description -->
          <div class="mb-10">
            {{ menclothing.description }}
          </div>
        </v-card-text>

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
// Importing files from main js
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
Vue.use(VueAxios, axios);

export default {
  name: "menclothing",
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      menclothings: [],
    };
  },

  // fetching data from an api
  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        (this.menclothings = response.data), console.log(response.data);
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