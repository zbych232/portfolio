<template>
  <div class="wrapper">
    <div class="section">
      <div class="fancyShape"></div>
      <div class="container">
        <div class="headerContainer">
          <h1>Hi there!</h1>
          <h1>I'm Zbigniew</h1>
          <h2>Frontend Developer</h2>
        </div>
      </div>
    </div>
    <div class="section">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div class="aboutMe ">
        <div class="container">
          <div class="md-layout">
            <div
              class="aboutMe__photoSection md-size-50  md-xsmall-size-100 md-layout-item ml-auto"
            >
              <img
                :src="image"
                alt="Rounded Image"
                class="rounded"
                :class="{ 'responsive-image': responsive }"
              />
            </div>
            <div
              class="aboutMe__textSection md-size-50  md-xsmall-size-100 md-layout-item"
            >
              <h2>A bit about me</h2>
              <p>
                I am a freelance Web Developer with many years of experience
                creating simple and modern designs from scratch using top-notch
                technology. I put in my best effort to create a better platform
                for clients, websites that are user-oriented, accessible, and
                with fast loading speed. Whatever your business requirement is,
                I’m dedicated to using my years of experience to pick the right
                tools and processes in order to create a design that suits your
                specific requirement. I recognize that creating a modern website
                entails combining design, server technology, and the platform
                that visitors and users interact with. I am also available to
                join your team, and I'm willing to work efficiently and
                thoroughly with your in-house team.
              </p>
              <md-button class="md-warning md-round md-lg"
                >Download CV</md-button
              >
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#5000ca"
          fill-opacity="1"
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,122.7C672,96,768,64,864,48C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
    <div class="section myProjectsSection">
      <div class="container">
        <div class="myProjectsSection__title text-center">
          <h2>My recent projects</h2>
          <h3>Here are a few design projects I've worked on recently.</h3>
        </div>
        <div class="md-layout">
          <div class="md-size-50  md-xsmall-size-100 md-layout-item">
            <div class="myProjectsSection">
              <div class="myProjectsSection__projectItemWrapper text-center">
                <div
                  class="myProjectsSection__projectItemWrapper__projectItem text-center"
                >
                  <img :src="projectImage" alt="Rounded Image" />
                  <div
                    class="myProjectsSection__projectItemWrapper__projectItem__textSection"
                  >
                    <h3>Ml Trans</h3>
                    <div class="dotsSpacing">
                      <div
                        class="dotsSpacing__dot"
                        v-for="(element, index) in dots"
                        :key="index"
                      ></div>
                    </div>
                    <h4>High quality transport and logistic services</h4>
                    <p>
                      This project required me to put in all my experience as a
                      full-stack developer to create a design and set themes for
                      the website. It also required a smooth design that could
                      work on different browsers, and I successfully achieved
                      the goal.
                    </p>
                  </div>
                </div>
              </div>
              <div class="myProjectsSection__projectItemWrapper text-center">
                <div
                  class="myProjectsSection__projectItemWrapper__projectItem text-center"
                >
                  <img :src="projectImage" alt="Rounded Image" />
                  <div
                    class="myProjectsSection__projectItemWrapper__projectItem__textSection"
                  >
                    <h3>Ml Trans</h3>
                    <div class="dotsSpacing">
                      <div
                        class="dotsSpacing__dot"
                        v-for="(element, index) in dots"
                        :key="index"
                      ></div>
                    </div>
                    <h4>High quality transport and logistic services</h4>
                    <p>
                      This project required me to put in all my experience as a
                      full-stack developer to create a design and set themes for
                      the website. It also required a smooth design that could
                      work on different browsers, and I successfully achieved
                      the goal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="md-size-50  md-xsmall-size-100 md-layout-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      image: require("@/assets/img/faces/zbyszeknew.jpg"),
      projectImage: require("@/assets/img/nature-2.jpg"),
      projectImage2: require("@/assets/img/bg2.jpg"),
      projectImage3: require("@/assets/img/city.jpg"),
      responsive: false,
      dots: 9,
    };
  },
  props: {},
  computed: {},
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.headerContainer {
  text-align: right;
  margin-top: 100px;
  h1 {
    font-weight: 900;
    font-size: 4em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 7em;
    }
  }
  h2 {
    font-weight: 900;
    font-size: 2em;
    color: black;
    @media only screen and (min-width: 600px) {
      font-size: 4em;
    }
  }
}
.fancyShape {
  position: absolute;
  top: calc(20vh);
  left: calc(20vw);
  width: 100px;
  height: 100px;
  background-color: #5000ca;
  border-radius: 58% 42% 36% 64% / 60% 64% 36% 40%;
  animation-name: fancyShape;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
@keyframes fancyShape {
  0% {
  }
  100% {
    border-radius: 58% 42% 51% 49% / 51% 52% 48% 49%;
  }
}
.aboutMe {
  background-color: #5000ca;
  color: white;
  margin: -10px 0px 0px 0px;
  &__photoSection {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__textSection {
    h2 {
      margin-top: 0;
      font-weight: 400;
    }
    p {
      font-size: 1.2em;
      font-weight: 400;
    }
  }
}
.myProjectsSection {
  &__title {
    h2 {
      color: black;
      text-transform: uppercase;
      font-weight: 400;
    }
    h3 {
      font-weight: 400;
    }
  }
  &__projectItemWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 20px 0px;
    &__projectItem {
      width: 96%;
      transition: width 0.3s;
      cursor: pointer;
      border-radius: 10px;
      box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.12);

      img {
        width: 100%;
        border-radius: 10px 10px 0 0;
      }
      &__textSection {
        padding: 40px;

        h3 {
          color: black;
          text-transform: uppercase;
          font-weight: 400;
          margin-bottom: 0;
        }
        h4 {
          font-style: italic;
          color: black;
        }
        p {
          color: black;
          word-break: keep-all;
        }
      }
      .dotsSpacing {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
        &__dot {
          width: 4px;
          height: 4px;
          background-color: #5000ca;
          border-radius: 50%;
          margin: 0 2px;
        }
      }
    }
    &__projectItem:hover {
      // animation-name: shadowAndResize;
      // animation-duration: 0.1s;
      // animation-fill-mode: forwards;
      width: 100%;
    }
    @keyframes shadowAndResize {
      0% {
      }
      100% {
        width: 100%;
      }
    }
  }
}
</style>
