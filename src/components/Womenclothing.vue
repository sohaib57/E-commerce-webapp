// fetching the womenclothing category from an api
<template>
  <v-app>
    <Header />
    <!-- v-card of womenclothing product -->
    <v-card class="d-flex flex-row flex-wrap" min-height="100vh">
      <!-- looping on women clothing that are getting by fetching -->
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="womenclothing in womenclothings"
        :key="womenclothing.id"
      >
        <v-img contain :src="womenclothing.image" :aspect-ratio="16 / 9">
        </v-img>

        <v-card-title class="text-justify font-weight-light subheading">
          <router-link
            class="text fontSize black--text textDecor"
            :to="{ name: 'product', params: { id: womenclothing.id } }"
          >
            {{ womenclothing.title }}
          </router-link>
        </v-card-title>
        <!-- product info -->
        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
          <!-- product category -->
          <div class="my-4 text-justify">
            category: {{ womenclothing.category }}
          </div>
          <div class="mb-4 mt-4 amber--text">${{ womenclothing.price }}</div>
          <div class="mb-10">
            {{ womenclothing.description }}
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
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
Vue.use(VueAxios, axios);

export default {
  name: "womenclothing",
  components: {
    Header,
    Footer,
  },
  data: () => {
    return {
      loading: false,
      selection: 1,
      womenclothings: [],
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        (this.womenclothings = response.data), console.log(response.data);
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