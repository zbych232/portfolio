<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li @click="scrollToElement('aboutMe')">
            <a href="javascript:void(0)">
              About
            </a>
          </li>
          <li @click="scrollToElement('projectsSection')">
            <a href="javascript:void(0)">
              Work
            </a>
          </li>
          <li @click="scrollToElement('contactSection')">
            <a href="javascript:void(0)">
              Let's talk
            </a>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, made with 💜 by
        <div class="md-title" style="display:inline">
          <span style="font-weight:800; color: black ;font-size:16px"
            >Zbigniew</span
          >
          <span style="font-weight:800; color: #5000ca; font-size:16px"
            >Stolarski.</span
          >
        </div>
      </div>
      <div class="iconsContainer">
        <div class="iconsContainer__iconWrapper">
          <i class="fab fa-github"></i>
        </div>
        <div class="iconsContainer__iconWrapper">
          <i class="fab fa-linkedin"></i>
        </div>
        <div class="iconsContainer__iconWrapper">
          <i class="fab fa-facebook-messenger"></i>
        </div>
        <div class="iconsContainer__iconWrapper">
          <i class="fas fa-envelope"></i>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
  methods: {
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
};
</script>
<style lang="scss" scoped>
.container {
  nav {
    ul {
      li {
        color: black;
      }
    }
  }
}
.copyright {
  color: black;
}
.iconsContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  &__iconWrapper {
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin: 4px;
    border-radius: 50%;
    cursor: pointer;
  }
  &__iconWrapper:hover {
    background-color: white;
  }
}
</style>
