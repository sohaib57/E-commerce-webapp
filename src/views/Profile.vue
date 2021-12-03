// users profile page
<template>
  <v-app>
    <Header />
    <!-- Update profile code -->
    <v-container>
      <!-- v-card for profile -->
      <v-card class="mx-auto" max-width="434" tile>
        <v-img
          height="100%"
          src="https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
        <v-col>
          <v-avatar size="100" style="position: absolute; top: 130px">
            <v-img :src="user_img"></v-img>
          </v-avatar>
        </v-col>
        <v-list-item color="rgba(0, 0, 0, .4)">
          <v-list-item-content>
            <v-list-item-title class="title"
              >{{ firstName }} {{ lastname }}</v-list-item-title
            >
            <v-list-item-subtitle>{{ email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <!-- Row of user edir user profile -->
      <v-row class="text-center mt-6" min-height="100vh">
        <v-col>
          <h1 class="font-weight-light">
            <v-icon>mdi-cog</v-icon> Edit your profile
          </h1>
          <v-container style="width: 400px">
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <!-- firstname -->
                <strong> First Name: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="firstName"
              >
                {{ firstName }}
              </v-col>
            </v-row>
            <!-- lastname -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Last Name: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="lastName"
              >
                {{ lastName }}
              </v-col>
            </v-row>
            <!-- username -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> User Name: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="userName"
              >
                {{ userName }}
              </v-col>
            </v-row>
            <!-- email -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Email: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="email"
              >
                {{ email }}
              </v-col>
            </v-row>
            <!-- password -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Password: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="password"
              >
                {{ password }}
              </v-col>
            </v-row>
            <!-- phone number -->
            <v-row class="mt-1">
              <v-col cols="6" sm="6" xsm="6" lg="6" md="6" class="">
                <strong> Phone Number: </strong>
              </v-col>
              <v-col
                cols="6"
                sm="6"
                xsm="6"
                lg="6"
                md="6"
                class="font-weight-light"
                v-model="number"
              >
                {{ number }}
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>

      <!-- Here the update profile  -->

      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="red" dark v-bind="attrs" v-on="on">
                Edit Profile
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="first name"
                        hint="Name must be less than 15 characters"
                        v-model="firstName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Last name"
                        hint="Name must be less than 15 characters"
                        v-model="lastName"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        label="Username"
                        v-model="userName"
                        hint=""
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Email"
                        hint="Email must be valid"
                        v-model="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Password"
                        type="password"
                        v-model="password"
                        hint="Password must be minimum eight characters, atleast one letter and one number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                        label="Number"
                        v-model="number"
                        hint="Phone Number must be in Pakistan format"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*indicates required field</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn color="blue darken-1" class="my-5" text @click="replace">
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>

      <br />
    </v-container>
  </v-app>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "Profile",
  components: {
    Header,
  },

  data() {
    return {
      valid: true,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userName: "",
      number: "",
      user_img: "",
      currenntUser: [],
      dialog: false,
    };
  },

  // gettinng the current user to edit his/her details
  created() {
    this.currenntUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.currenntUser);

    this.firstName = this.currenntUser.firstNameValue;
    this.lastName = this.currenntUser.lastNameValue;
    this.userName = this.currenntUser.userNameValue;
    this.email = this.currenntUser.emailValue;
    this.password = this.currenntUser.passwordValue;
    this.number = this.currenntUser.numberValue;
    this.user_img = this.currenntUser.user_img;
  },

  // Replacing the values
  methods: {
    replace() {
      let index = this.currenntUser.findIndex(
        (x) => x.emailValue == this.email
      );
      this.currenntUser[index] = {
        emailValue: this.email,
        firstNameValue: this.firstName,
        lastNameValue: this.lastName,
        userNameValue: this.userName,
        passwordValue: this.password,
        numberValue: this.number,
      };

      console.log(this.currenntUser.firstNameValue);
      localStorage.setItem("users", JSON.stringify(this.currenntUser));

      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          emailValue: this.email,
          firstNameValue: this.firstName,
          lastNameValue: this.lastName,
          userNameValue: this.userName,
          passwordValue: this.password,
          numberValue: this.number,
        })
      );
    },
  },
};
</script>

