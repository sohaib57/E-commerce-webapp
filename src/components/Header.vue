// This header is having two bars We can use it where needed.
<template>
  <div>
    <!-- Navigation drawer -->
    <v-navigation-drawer app v-model="drawer" temporary fixed>
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-icon left>mdi-menu-open</v-icon>
          <v-list-item-content class="mx-4" right>
            <v-list-item-title class="font-weight-bold"
              >Categories</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider></v-divider>

      <!-- Drawer Category list -->
      <router-link class="textDecor" to="/jewelery" active-class="red darken-1">
        <v-list dense class="justify-content-center">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon left>mdi-diamond-stone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Jewelery</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </router-link>

      <v-divider></v-divider>

      <router-link
        class="textDecor"
        to="/electronics"
        active-class="red darken-1"
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon left>mdi-sd</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Electronics</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </router-link>

      <v-divider></v-divider>

      <router-link
        class="textDecor"
        to="/menclothing"
        active-class="red darken-1"
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon left>mdi-human-male</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Men's Clothing</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </router-link>

      <v-divider></v-divider>

      <router-link
        class="textDecor"
        to="/womenclothing"
        active-class="red darken-1"
      >
        <v-list dense>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon left>mdi-human-female</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Women's Clothing</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </router-link>

      <!-- Category list ends here -->
    </v-navigation-drawer>
    <!-- Navigation drawer ends here -->

    <!--Appbar starts from here -->
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <router-link to="/home" class="logo">
        <v-avatar size="100">
          <img src="../assets/logo.png" alt="Boutique" />
        </v-avatar>
      </router-link>
      <!-- Search bar -->
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search products"
        class="hidden-sm-and-down pl-10 ml-16"
      />

      <v-spacer></v-spacer>

      <!-- Right profile menu and cart -->

      <v-menu class="text-center" offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn left icon v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            <v-icon left>mdi-menu-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Sohaib ashraf</v-list-item-title>
              <v-list-item-subtitle>Logged In</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <!-- settings option -->
          <v-list-item link>
            <v-list-item-title @click="profileUpdate">
              <v-icon left>mdi-cog</v-icon>
              settings
            </v-list-item-title>
          </v-list-item>

          <v-divider></v-divider>
          <!-- Logout option -->
          <v-list-item link @click="logOut">
            <v-list-item-title>
              <v-icon left>mdi-logout</v-icon>
              logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <!-- Cart icon -->
      <router-link to="/checkout" class="textDecor cart">
        <v-btn icon @click="cartItemCount">
          <v-badge
            color="red"
            bordered
            :content="cartItemCount"
            :value="cartItemCount"
          >
            <v-icon> mdi-cart</v-icon>
          </v-badge>
        </v-btn>
      </router-link>
    </v-app-bar>

    <!-- 2nd v-app-bar -->
    <v-app-bar dense class="d-flex justify-end">
      <!-- Buttons menu container -->
      <div>
        <!-- Home button-->
        <router-link class="textDecor" to="/home">
          <v-btn depressed color="Black" white>
            <v-icon left> mdi-home</v-icon>
            <span class="tolCase"> <span class="toUCase">H</span>ome</span>
          </v-btn>
        </router-link>

        <!-- Products button -->

        <router-link class="textDecor" to="/products">
          <v-btn depressed color="Black" white>
            <v-icon left>mdi-package-variant </v-icon>
            <span class="tolCase"> <span class="toUCase">P</span>roducts</span>
          </v-btn>
        </router-link>

        <!-- About us button -->
        <router-link to="/Aboutus" class="textDecor aboutbtn">
          <v-btn depressed color="Black">
            <v-icon left>mdi-information </v-icon>
            <span class="tolCase"> <span class="toUCase">A</span>bout us </span>
          </v-btn>
        </router-link>
        <v-btn depressed>
          <v-text class="contactNum">
            <v-icon left>mdi-phone</v-icon> +92304420742
          </v-text>
        </v-btn>
      </div>
    </v-app-bar>
    <v-progress-linear
      indeterminate
      color="red"
    ></v-progress-linear>

    <!-- Appbar ends here -->
  </div>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    drawer: null,
    drawer2: null,
  }),
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
  },
  methods: {
    logOut() {
      localStorage.removeItem(
        "currentUser",
        this.$router.push({ name: "Login" })
      );
    },

    profileUpdate() {
      this.$router.push({ name: "Profile" });
    },
  },
};
</script>
<style>
.textDecor {
  text-decoration: none;
  color: black;
}

.tolCase {
  text-transform: lowercase;
}

.toUCase {
  text-transform: uppercase;
}

/* Applying media query for mobile responsiveness */

@media (max-width: 570px) {
  .contactNum {
    display: none;
    justify-content: space-between;
  }
}
</style>
