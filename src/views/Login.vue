<template>
  <!-- Login page -->
  <v-app>
    <!--Appbar starts from here -->
    <v-app-bar app dense>
      <v-avatar size="100">
        <img src="../assets/logo.png" alt="Boutique" />
      </v-avatar>

      <v-spacer></v-spacer>

      <!-- Right profile menu and cart -->

      <v-btn depressed left v-bind="attrs" v-on="on" @click="signup">
        <v-icon left>mdi-account-plus</v-icon> S<v-text class="transform"
          >ignup
        </v-text>
      </v-btn>
    </v-app-bar>

    <!-- Appbar ends here -->

    <v-container>
      <!-- Alert for not entering username or password -->
      <v-alert class="mt-1" v-if="show" type="error"
        >Invalid email and/or password.</v-alert
      >
      <v-row class="text-center">
        <v-col cols="6" class="mx-auto my-10">
          <h1 class="font-weight-light">Login here</h1>

          <v-form ref="form" v-model="valid" lazy-validation>
            <!-- Enter Username -->
            <v-text-field
              prepend-inner-icon="mdi-account"
              label="Type your username"
              v-model="userName"
              required
              class="font-weight-light"
            ></v-text-field>

            <!-- Enter  Password  -->
            <v-text-field
              prepend-inner-icon="mdi-lock"
              label="Type your password"
              v-model="password"
              class="font-weight-light"
              :value="myPass"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
            ></v-text-field>

            <v-btn
              class="white--text font-weight-light"
              color="indigo"
              @click.prevent="logIn"
            >
              <v-icon left color="white">mdi-login</v-icon>
              Login
            </v-btn>

            <v-text class="d-block mt-5 font-weight-light">
              Don't have an account ?
              <router-link to="/signup" class="textDecor">
                Click here</router-link
              >
            </v-text>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      value: String,
      valid: true,
      userName: "",
      password: "",
      newUser: [],
      status: null,
    };
  },

  methods: {
    // methods to get an array of object from local storage
    logIn() {
      this.newUser = JSON.parse(localStorage.getItem("users"));
      this.currentUser = this.newUser.find((e) => {
        return (
          e.userNameValue == this.userName && e.passwordValue == this.password
        );
      });
      // conditions to check if  is present or not
      if (this.currentUser) {
        console.log("Login sucessfully");
        localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
        this.$router.push({ name: "Home" });
      } else {
        console.log("User is not registered");
        this.status = 401;
      }
    },
    signup() {
      this.$router.push({ name: "Signup" });
    },
  },
  computed: {
    show() {
      return this.status === 401;
    },
  },
};
</script>

<style scoped>
/* css for text transformation */
.textDecor {
  text-decoration: none;
}
.transform {
  text-transform: lowercase;
}
</style>
