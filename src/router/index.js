// Importing the files globally
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";
import Jewelery from "../components/Jewelery.vue";
import Menclothing from "../components/Menclothing.vue";
import Womenclothing from "../components/Womenclothing.vue";
import Electronics from "../components/Electronics.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Profile from "../views/Profile.vue";
import Aboutus from "../views/Aboutus.vue";
import checkout from "../components/checkout.vue"

Vue.use(VueRouter);


// routes
export const routes = [{
    path: "/Signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "products",
    component: Products,

  },

  {
    path: "/product",
    child: {
      path: "/product:id"
    },
    component: Product,
    name: "product",
    props: true,
  },
  {
    path: "/Aboutus",
    component: Aboutus,
    name: "Aboutus"
  },
  {
    path: "/jewelery",
    child: {
      path: "/jewelery:id"
    },
    component: Jewelery,
    name: "Jewelery",

  },
  {
    path: "/electronics",
    child: {
      path: "/electronics:id"
    },
    component: Electronics,
    name: "Electronics",
    props: true
  },
  {
    path: "/menclothing",
    child: {
      path: "/menclothing:id"
    },
    component: Menclothing,
    name: "Menclothing",
  },
  {
    path: "/womenclothing",
    child: {
      path: "/womenclothing:id"
    },
    component: Womenclothing,
    name: "Womenclothing",
  },
  {
    path: "/checkout",
    component: checkout,
    name: "checkout"
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


// Methods for router guards
router.beforeEach((to, from, next) => {

  var isAuthenticated = false;
  if (localStorage.getItem('currentUser'))
    isAuthenticated = true;
  else
    isAuthenticated = false;
  if (['/login', '/signup', ].includes(to.path) || isAuthenticated) {
    next();
  } else {
    next('/login');
  }
})


export default router;