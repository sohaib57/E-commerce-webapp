//this page contains the specific product page
<template>
  <v-app>
    <Header />
    <!-- Conatainer fluid to arrange items in them. -->
    <v-container fluid fill-height>
      <v-row no-gutters>
        <v-col cols="8" xs="12" md="6" sm="12">
          <v-row no-gutters>
            <v-col cols="12">
              <v-img
                height="50vh"
                class="my-15 ml-10"
                contain
                :src="product.image"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" xs="12" sm="12" class="ml-sm-15 ml-md-0">
          <v-row no-gutters class="py-15">
            <v-col cols="12  subheading font-weight-light pl-4">{{
              product.title
            }}</v-col>
            <v-col cols="12" class="text-justify pl-4 font-weight-light"
              >category: {{ product.category }}</v-col
            >

            <v-col cols="12 text-justify amber--text pl-4"
              >${{ product.price }}</v-col
            >
            <v-col cols="8">
              <v-card-text>
                <div class="mt-5 text-justify">{{ product.description }}</div>
              </v-card-text></v-col
            >
            <v-col cols="8">
              <v-btn align-end block relative bottom color="red">
                <router-link to="/products" class="white--text textDecor">
                  <v-icon left>mdi-cart</v-icon> Back to products
                </router-link>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  props: ["id"],
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
    methods: {
      addToCart() {
        this.$store.dispatch("addProductToCart", {
          product: this.product,
          quantity: 1,
        });
      },
    },
  },
};
</script>

<style scoped>
.textDecor {
  text-decoration: none;
}
</style>