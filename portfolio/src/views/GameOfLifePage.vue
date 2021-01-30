<template>
  <div class="wrapper">
    <div class="section text-center" style="padding-bottom:0">
      <div class="container">
        <div class="headerContainer">
          <h1>{{ gameOfLife.title }}</h1>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container gameOfLifeWrapper">
        <gameOfLife></gameOfLife>
      </div>
    </div>
  </div>
</template>

<script>
import gameOfLife from "../customComponents/gameOfLife";

export default {
  components: {
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
.headerContainer {
  margin-top: 100px;
}
.gameOfLifeWrapper {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
