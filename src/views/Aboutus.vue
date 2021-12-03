// ABout us page regarding the ecommerce webapp
<template>
  <v-app>
    <!-- //importing header here -->
    <Header />
    <!-- container for about us -->
    <v-container>
      <v-timeline>
        <v-timeline-item
          v-for="(year, i) in years"
          :key="i"
          :color="year.color"
          small
        >
          <template v-slot:opposite>
            <span
              :class="`headline font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
          </template>
          <div class="py-4">
            <h2 :class="`headline font-weight-light mb-4 ${year.color}--text`">
              Boutique
            </h2>
            <div>
              Lorem ipsum dolor sit amet, no nam oblique veritus. Commune
              scaevola imperdiet nec ut, sed euismod convenire principes at. Est
              et nobis iisque percipit, an vim zril disputando voluptatibus, vix
              an salutandi sententiae.
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
    <Footer />
  </v-app>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data: () => ({
    name: "Aboutus",

    //  An array of history of boutique
    years: [
      {
        color: "red",
        year: "1960",
      },
      {
        color: "red",
        year: "1970",
      },
      {
        color: "red",
        year: "1980",
      },
      {
        color: "red",
        year: "1990",
      },
      {
        color: "red",
        year: "2000",
      },
    ],
  }),
};
</script>