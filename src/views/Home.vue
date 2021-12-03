// This page is the home page of boutique webapp
// after login user comes here
<template>
  <v-app>
    <Header />
    <!-- Carousel -->
    <v-carousel class="mt-4" hide-delimiters cycle>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        contain
        cover
      ></v-carousel-item>
    </v-carousel>

    <!-- sheet starts from here -->
    <v-sheet
      class="mx-auto mt-5 d-flex flex-row justify-space-around flex-wrap"
      elevation="3"
      width="100%"
      dense
    >
      <!-- card one -->
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img contain height="250" src="../assets/menjacket.jpg"></v-img>

        <v-card-title>Men best denim jacket</v-card-title>
        <div class="black--text ms-4">Category: Mensclothing</div>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.5 (413)</div>
          </v-row>

          <div class="my-6 text-subtitle-1 amber--text">$80</div>

          <!-- Content of card -->

          <div class="text-justify">
            Great outerwear jackets for Spring/Autumn/Winter, suitable for many
            occasions, such as working, hiking, camping, mountain/rock climbing,
            cycling, traveling or other outdoors. Good gift choice for you or
            your family member. A warm hearted love to Father, husband or son in
            this thanksgiving or Christmas Day.
          </div>
        </v-card-text>
      </v-card>
      <!-- card two -->
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img contain height="250" src="../assets/womenjacket.jpg"></v-img>

        <v-card-title>Women long coat</v-card-title>
        <div class="black--text ms-4">Category: Womensclothing</div>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">4.0 (223)</div>
          </v-row>

          <div class="my-6 text-subtitle-1 amber--text">$92</div>

          <div class="text-justify">
            100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25%
            COTTON (SWEATER), Faux leather material for style and comfort / 2
            pockets of front, 2-For-One Hooded denim style faux leather jacket,
            Button detail on waist / Detail stitching at sides, HAND WASH ONLY /
            DO NOT BLEACH / LINE DRY / DO NOT IRON
          </div>
        </v-card-text>
      </v-card>

      <!-- card three -->
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img contain height="250" src="../assets/jewelery.jpg"></v-img>
        <v-card-title>Earnings with necklace</v-card-title>
        <div class="black--text ms-4">Category: jewelery</div>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">5.0 (516)</div>
          </v-row>

          <div class="my-6 text-subtitle-1 amber--text">$108</div>

          <div class="text-justify">
            Satisfaction Guaranteed. Return or exchange any order within 30
            days. Designed and sold by Hafeez Center in the United States.
            Satisfaction Guaranteed. Return or exchange any order within 30
            days.
          </div>
        </v-card-text>
        <!-- card Four -->
      </v-card>
      <v-card :loading="loading" class="my-12" max-width="300">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img height="250" src="../assets/sdcard.jpeg"></v-img>

        <v-card-title>16Gb SD card</v-card-title>
        <div class="black--text ms-4">Category: jewelery</div>

        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ms-4">3.5 (203)</div>
          </v-row>

          <div class="my-6 text-subtitle-1 amber--text">$18</div>

          <div class="text-justify">
            Expand your PS4 gaming experience, Play anywhere Fast and easy,
            setup Sleek design with high capacity, 3-year manufacturer's limited
            warranty
          </div>
        </v-card-text>
      </v-card>
      <!-- Pagination between v-card sheet -->
      <div class="text-center mx-auto mb-10">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
        ></v-pagination>
      </div>
    </v-sheet>

    <!-- Footer  -->
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
  data() {
    return {
      show: false,
      page: 1,
      items: [
        {
          src: "https://fixthephoto.com/blog/UserFiles/macro-jewelry-photography.jpg",
        },
        {
          src: "https://images.freeimages.com/images/large-previews/706/springcut-diamond-ring-1-1057172.jpg",
        },
        {
          src: "https://thumbs.dreamstime.com/b/fashion-portrait-young-man-shirt-white-background-poses-studio-169869089.jpg",
        },
        {
          src: "https://img.freepik.com/free-photo/men-s-casual-outfits-man-clothing-with-gray-suit-watch-sunglasses-trousers-socks-shirt-oxford-shoes-isolated-white-background-top-view_107612-45.jpg?size=626&ext=jpg",
        },
        {
          src: "https://static.vecteezy.com/system/resources/previews/003/737/147/large_2x/yellow-classic-jacket-isolated-women-s-office-classic-yellow-suit-jackets-isolated-on-white-background-free-photo.jpg",
        },
        {
          src: "https://purepng.com/public/uploads/large/purepng.com-sandisk-micro-sd-memory-cardelectronics-memory-card-941524665687o7byj.png",
        },
      ],
    };
  },
};
</script>

