<template>
  <v-app>
    <!--Appbar starts from here -->
    <v-app-bar app dense>
      <v-avatar size="100">
        <img src="../assets/logo.png" alt="Boutique" />
      </v-avatar>
      <v-spacer></v-spacer>

      <!-- Right profile menu and cart -->

      <v-btn depressed left v-bind="attrs" v-on="on" @click="login">
        <v-icon left>mdi-login</v-icon> L<v-text class="transform"
          >ogin
        </v-text>
      </v-btn>
    </v-app-bar>

    <!-- Appbar ends here -->

    <!-- Signup page -->
    <v-card
      class="d-flex flex-row flex-wrap mx-auto"
      width="100%"
      outlined
      color="transparent"
    >
      <v-container>
        <v-alert class="mt-1" v-if="show" type="error"
          >Invalid user data</v-alert
        >
        <v-row class="text-center">
          <v-col cols="6" class="mx-auto" color="white">
            <h1 class="font-weight-light">Sign Up</h1>
            <!-- Form starts here -->
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-inner-icon="mdi-account"
                label=" Your First Name"
                type="text"
                placeholder="must be less than 15 characters"
                v-model="firstName"
                :rules="firstNameRules"
                required
                class="font-weight-light"
              ></v-text-field>
              <!-- Lastname field -->
              <v-text-field
                prepend-inner-icon="mdi-account"
                label="Your Last Name"
                type="text"
                placeholder=" must be less than 15 characters"
                v-model="lastName"
                :rules="lastNameRules"
                required
                class="font-weight-light"
              ></v-text-field>
              <!-- Enter email -->
              <v-text-field
                prepend-inner-icon="mdi-email"
                label="Your Email"
                type="email"
                placeholder="name@example.com"
                v-model="email"
                :rules="emailRules"
                required
                class="font-weight-light"
              ></v-text-field>
              <!-- Username field-->
              <v-text-field
                prepend-inner-icon="mdi-mail"
                label="Enter Username"
                type="text"
                placeholder="enterusername"
                v-model="userName"
                :rules="userNameRules"
                required
                class="font-weight-light"
              ></v-text-field>

              <!-- password field -->
              <v-text-field
                prepend-inner-icon="mdi-lock"
                class="font-weight-light"
                name="Password"
                :value="myPass"
                label="Enter password"
                :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="() => (value = !value)"
                :type="value ? 'password' : 'text'"
                placeholder="must be min 8 characters,atleast one letter and one num"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>
              <!-- Phone num field -->
              <v-text-field
                prepend-inner-icon="mdi-phone"
                class="font-weight-light"
                label="Phone number"
                type="tel"
                placeholder="+92"
                v-model="number"
                :rules="numberRules"
                required
              ></v-text-field>
              <!-- Input field for image -->
              <v-file-input
                @change="displayImg"
                v-model="User_img"
                placeholder="Pick an avatar"
              >
                Upload image
              </v-file-input>

              <v-btn
                depressed
                color="indigo"
                @click.prevent="validateAndStoreInLocal"
                class="white--text font-weight-light"
              >
                <v-icon color="white" left>mdi-account-plus </v-icon>
                Signup
              </v-btn>

              <v-text class="d-block mt-5 font-weight-light"
                >Already have an account?
                <router-link class="textDecor" to="/login">
                  Login here</router-link
                ></v-text
              >
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-app>
</template>

<script>
import {
  emailVal,
  firstNameVal,
  lastNameVal,
  userNameVal,
  numberVal,
  passwordVal,
} from "@/constants/constant.js";

export default {
  name: "Signup",
  data() {
    return {
      valid: true,
      value: String,
      //Setting rules for validations
      emailRules: emailVal,
      firstNameRules: firstNameVal,
      lastNameRules: lastNameVal,
      userNameRules: userNameVal,
      passwordRules: passwordVal,
      numberRules: numberVal,

      // Data properties // modeling
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      newUser: [],
      user_img: "",
      status: null,
    };
  },
  created() {
    this.newUser = JSON.parse(localStorage.getItem("users") || "[]");
  },
  methods: {
    //  For image upload
    displayImg(event) {
      console.log(event);

      let store = this;
      const reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          store.user_img = reader.result;
        },
        false
      );
      reader.readAsDataURL(event);
    },

    // for validations
    validateAndStoreInLocal() {
      if (this.$refs.form.validate()) {
        let user = {
          firstNameValue: this.firstName,
          lastNameValue: this.lastName,
          emailValue: this.email,
          passwordValue: this.password,
          userNameValue: this.userName,
          numberValue: this.number,
        };

        // duplication checkup

        if (
          this.newUser.some((e) => {
            return e.emailValue == this.email;
          })
        ) {
          console.log("duplicate data");
        }
        //push in local storage
        else {
          this.newUser.push(user);
          localStorage.setItem("users", JSON.stringify(this.newUser));
          console.log("Your account has been successfully created");
          this.$router.push({ name: "Login" });
        }
      } else {
        console.log("Your account is not created");
        this.status = 401;
      }
    },
    login() {
      this.$router.push({ name: "Login" });
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
/* css for text decor and form paddings */
.textDecor {
  text-decoration: none;
}
.v-form {
  padding: 18px;
}

.v-text-field {
  margin: -1px;
}

.transform {
  text-transform: lowercase;
}
</style>
