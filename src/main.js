import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store'



// Filters

Vue.filter("lCase", (val) => {

  return val.toLowerCase();
})

Vue.config.productionTip = false

new Vue({
  el: "#app",
  router,
  store,
  vuetify,
  render: h => h(App)
})