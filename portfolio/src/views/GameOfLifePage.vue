<template>
  <div class="wrapper">
    <projectHeader>
      <template v-slot:title>{{ gameOfLife.title }}</template>
      <template v-slot:description>{{ gameOfLife.description }}</template>
    </projectHeader>

    <gameOfLife></gameOfLife>
  </div>
</template>

<script>
import projectHeader from "../customComponents/projectHeader";

import gameOfLife from "../customComponents/gameOfLife";

export default {
  components: {
    projectHeader,
    gameOfLife,
  },
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg"),
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg"),
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg"),
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg"),
    },
  },

  data() {
    return {
      name: null,
      email: null,
      message: null,

      gameOfLife: {
        title: "Game Of Life",
        description: "To wspaniała gra o życiu komórek...",
      },
    };
  },
  watch: {},
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  beforeMount() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
