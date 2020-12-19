import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/Profile.vue";
import Login from "./views/Login.vue";
import FurryGame from "./views/FurryGamePage.vue";
import GameOfLife from "./views/GameOfLifePage.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";
import mainPage from "./views/mainPage.vue";
import index from "./views/Index.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "mainPage",
      components: { default: mainPage, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/index",
      name: "index",
      components: { default: index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/furryGame",
      name: "furryGame",
      components: {
        default: FurryGame,
        header: MainNavbar,
        footer: MainFooter,
      },

      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/gameOfLife",
      name: "gameOfLife",
      components: {
        default: GameOfLife,
        header: MainNavbar,
        footer: MainFooter,
      },

      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      },
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
