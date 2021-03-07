<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <router-link :to="{ name: 'mainPage' }">
          <div class="md-title">
            <span style="font-weight:800; color: black ;font-size:28px"
              >Zbigniew</span
            >
            <span style="font-weight:800; color: #5000ca; font-size:28px"
              >Stolarski.</span
            >
          </div>
        </router-link>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <mobile-menu nav-mobile-section-start="false">
              <!-- Here you can add your items from the section-start of your toolbar -->
            </mobile-menu>
            <md-list>
              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement('aboutMe')"
              >
                <p>O mnie</p>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement('projectsSection')"
              >
                <p>Projekty</p>
              </md-list-item>
              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement('contactSection')"
              >
                <p>Kontakt</p>
              </md-list-item>

              <!-- <li class="md-list-item">
                <a
                  href="javascript:void(0)"
                  class="md-list-item-router md-list-item-container md-button-clean dropdown"
                >
                  <div class="md-list-item-content">
                    <drop-down direction="down">
                      <md-button
                        slot="title"
                        class="md-button md-button-link md-white md-simple dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i class="material-icons">view_carousel</i>
                        <p>Projekty</p>
                      </md-button>
                      <ul class="dropdown-menu dropdown-with-icons">
                        <li @click="routeFun('furryGame')">
                          <a href="javascript:void(0)">
                            <i class="material-icons">view_day</i>
                            <p>Furry Game</p>
                          </a>
                        </li>

                        <li @click="routeFun('gameOfLife')">
                          <a href="javascript:void(0)">
                            <i class="material-icons">fingerprint</i>
                            <p>Game Of Life</p>
                          </a>
                        </li>
                      </ul>
                    </drop-down>
                  </div>
                </a>
              </li> -->

              <md-list-item href="https://github.com/zbych232" target="_blank">
                <i class="fab fa-github"></i>
                <p class="hidden-lg">Github</p>
                <md-tooltip md-direction="bottom"
                  >See my projects on Github</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://www.linkedin.com/in/zbigniewcl/"
                target="_blank"
              >
                <i class="fab fa-linkedin"></i>
                <p class="hidden-lg">LinkedIn</p>
                <md-tooltip md-direction="bottom"
                  >See my profile on LinkedIn</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="https://m.me/zbigniew.stolarski.167"
                target="_blank"
              >
                <i class="fab fa-facebook-messenger"></i>
                <p class="hidden-lg">Messenger</p>
                <md-tooltip md-direction="bottom"
                  >Contact me on Messenger</md-tooltip
                >
              </md-list-item>
              <md-list-item
                href="mailto:stolarskizbigniew93@gmail.com"
                target="_blank"
              >
                <i class="material-icons">email</i>
                <p class="hidden-lg">E-mail</p>
                <md-tooltip md-direction="bottom">Send e-mail</md-tooltip>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu,
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every((r) => r !== this.$route.name);
    },
  },
  methods: {
    routeFun(name) {
      this.$router.push({
        name: name,
      });
    },
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (scrollValue > 0) {
        //if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement(id) {
      if (this.$route.path != "/") {
        this.$router.push({ path: "/#" + id });
      }
      let element_id = document.getElementById(id);

      if (element_id) {
        element_id.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>
