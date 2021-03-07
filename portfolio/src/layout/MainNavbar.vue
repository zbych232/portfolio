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
                <p class="navItem">About</p>
              </md-list-item>

              <md-list-item
                href="javascript:void(0)"
                @click="scrollToElement('projectsSection')"
              >
                <p class="navItem">Work</p>
              </md-list-item>
              <div class="letsTalkNavbarBtnWrapper">
                <md-button
                  class="md-warning md-round letsTalkNavbarBtnWrapper__btn"
                  @click="scrollToElement('contactSection')"
                  ><md-icon>email</md-icon>Let's talk!</md-button
                >
              </div>
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
<style scoped lang="scss">
.letsTalkNavbarBtnWrapper {
  margin: 0 10px;
  @media only screen and (max-width: 992px) {
    margin: 10px;
    display: flex;
    justify-content: center;
    &__btn {
      width: 80%;
    }
  }
}
.navItem {
  margin: auto !important;
  color: black;
  font-weight: 800 !important;
}
.navItem:hover {
  color: #5000ca;
}
</style>
