<template>
  <div class="wrapper">
    <projectHeader>
      <template v-slot:title>{{ title }}</template>
      <template v-slot:description>{{ description }}</template>
    </projectHeader>

    <furryGame v-if="this.$route.params.project == 'furryGame'"></furryGame>
    <gameOfLife v-if="this.$route.params.project == 'gameOfLife'"></gameOfLife>
  </div>
</template>

<script>
import projectHeader from "../customComponents/projectHeader";
import furryGame from "../customComponents/furryGame";
import gameOfLife from "../customComponents/gameOfLife";
export default {
  components: {
    projectHeader,
    furryGame,
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

      title: "",
      description: "",
      furryGame: {
        title: "Furry Game",
        description:
          "Bohaterem naszej gry jest Furry, który porusza się po planszy o rozmiarach 10x10 pól. Na losowym polu planszy znajduje się moneta. Gracz sterując Furrym przy pomocy strzałek na klawiaturze musi dojść do monety. Gdy to zrobi, moneta znika z planszy i pojawia się na innym polu, również losowym, a gracz dostaje 1 punkt. Gdy gracz uderzy w ścianę, gra się kończy: plansza znika i, jak to w grach komputerowych bywa, pojawia się napis GAME OVER. W każdym momencie gry, gracz musi widzieć ile monet już zebrał.",
      },
      gameOfLife: {
        title: "Game Of Life",
        description: "To wspaniała gra o życiu komórek...",
      },
    };
  },
  watch: {
    $route(to, from) {
      this.computeTitle();
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  beforeMount() {
    this.computeTitle();
  },
  methods: {
    computeTitle() {
      switch (this.$route.params.project) {
        case "furryGame":
          this.title = this.furryGame.title;
          this.description = this.furryGame.description;
          break;
        case "gameOfLife":
          this.title = this.gameOfLife.title;
          this.description = this.gameOfLife.description;
          break;
      }
    },
  },
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
