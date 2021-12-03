// This is the checkout after adding into the cart
<template>
  <!-- Checkout Component -->
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">
          Delivery Details
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">
          Personal Details
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3"> Payment</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

          <v-btn color="primary"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px">
            <v-card-text v-model="email"> </v-card-text>

            <v-card-text v-model="userName"> </v-card-text>
            <v-card-text v-model="password"> </v-card-text>
            <v-card-text v-model="number"> </v-card-text>
          </v-card>

          <v-btn color="primary"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px">
            <v-card-text>
              <v-row align="center">
                <v-container class="border">
                  <v-checkbox
                    hide-details
                    class="shrink mr-2 mt-0"
                    label="Credit/Debit Card"
                  ></v-checkbox>
                </v-container>
              </v-row>

              <v-row align="center" class="mt-10">
                <v-container class="border">
                  <v-checkbox
                    hide-details
                    class="shrink mr-2 mt-0"
                    label="Master CArd"
                  ></v-checkbox>
                </v-container>
              </v-row>
            </v-card-text>
          </v-card>

          <v-btn color="primary"> Continue </v-btn>

          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>



<script>
export default {
  name: "checkout",
};
</script>

<style scoped>
.border {
  border: 1px solid black;
}
</style>
