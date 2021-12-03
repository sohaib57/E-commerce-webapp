// Electronic component for future use

<template>
  <!-- ELectronic cards info -->
  <v-app>
    <Header />
    <v-card class="d-flex flex-row flex-wrap" min-height="100vh">
      <!-- Loop on electronics that are getting by fetching -->
      <v-card
        id="my-card"
        class="mx-auto my-12"
        max-width="270"
        v-for="electronic in electronics"
        :key="electronic.id"
      >
        <v-img contain :src="electronic.image" :aspect-ratio="16 / 9"> </v-img>

        <v-card-title class="text-justify font-weight-light subheading">
          <router-link
            class="text black--text textDecor"
            :to="{ name: 'product', params: { id: electronic.id } }"
          >
            {{ electronic.title }}
          </router-link>
        </v-card-title>

        <v-card-text>
          <v-row align="center" class="mx-0"> </v-row>
          <!-- product category -->
          <div class="my-4 text-justify">
            category: {{ electronic.category }}
          </div>
          <div class="mb-4 mt-4 amber--text">${{ electronic.price }}</div>
          <div class="mb-10 text-justify">
            {{ electronic.description }}
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";
Vue.use(VueAxios, axios);

export default {
  name: "Electronic",
  components: {
    Header,
    Footer,
  },

  data: () => {
    return {
      loading: false,
      selection: 1,
      electronics: [],
    };
  },

  mounted() {
    Vue.axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((response) => {
        (this.electronics = response.data), console.log(response.data);
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