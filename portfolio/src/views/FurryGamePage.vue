<template>
  <div class="wrapper">
    <div class="headerContainer section">
      <div class="container headerWrapper">
        <div class="container">
          <div class="md-layout">
            <div
              class="headerWrapper__leftSection md-size-50 md-small-size-100 md-layout-item"
            >
              <h2>Pikachu game</h2>
              <p>
                Catch Pikachu without hitting the edges of the board. Steer with
                the arrows. Try to collect as many points as possible!
              </p>
              <md-button
                style="margin-top:20px;"
                class="md-warning md-round letsTalkNavbarBtnWrapper__btn"
                @click="
                  redirect(
                    'https://github.com/zbych232/portfolio/blob/master/portfolio/src/customComponents/furryGame.vue'
                  )
                "
                ><i class="fab fa-github"></i>Check the code!</md-button
              >
            </div>
            <div
              class="headerWrapper__rightSection md-size-50 md-small-size-100 md-layout-item "
            >
              <img
                class="headerWrapper__rightSection__cellImage"
                style="width:60%"
                src="../assets/img/furryGame/pikachu.gif"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="position:relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,192L48,181.3C96,171,192,149,288,128C384,107,480,85,576,80C672,75,768,85,864,101.3C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div style="position:absolute;width:100%; top:0">
        <svg xmlns="http://www.w3.org/2000/svg" style="" viewBox="0 0 1440 320">
          <path
            fill="#ff8d54"
            fill-opacity="1"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,122.7C672,96,768,64,864,48C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
    <div class="section">
      <div class="container furryGameWrapper">
        <furryGame></furryGame>
      </div>
    </div>
  </div>
</template>

<script>
import furryGame from "../customComponents/furryGame";

export default {
  components: {
    furryGame,
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
  methods: {
    redirect(url) {
      window.location.href = url;
    },
  },
};
</script>

<style lang="scss" scoped>
.furryGameWrapper {
  padding-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.headerContainer {
  background-color: #ff8d54;

  .headerWrapper {
    margin-top: 100px;
    @media all and (max-width: 450px) {
      margin-top: 0;
    }
    display: flex;
    &__leftSection {
      color: white;
      h2 {
        font-weight: 800;
      }
      p {
        font-size: 20px;
        font-weight: 400;
      }
      @media all and (max-width: 767px) {
        h2 {
          font-weight: 800;
          font-size: 24px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }

    &__rightSection {
      text-align: center;
    }
  }
}
</style>
